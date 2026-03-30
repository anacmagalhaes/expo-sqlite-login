import { useSQLiteContext } from "expo-sqlite"

export type UserDatabase = {
    id: number, 
    name: string, 
    email: string, 
    password: string
}

export function useUsersDatabase(){
    const database = useSQLiteContext()

   async function create(data: Omit<UserDatabase, "id">){
    const statement = await database.prepareAsync(
        "INSERT INTO users (name, email, password) VALUES ($name, $email, $password)"
    )
    try {
        const result = await statement.executeAsync({
            $name: data.name,
            $email: data.email,
            $password: data.password
        })

        const insertedRowId = result.lastInsertRowId.toLocaleString()

        return { insertedRowId }
    } catch (error) {
        throw error
    } finally {
        await statement.finalizeAsync()
    }
   }
   
   async function searchByEmail(email: string) {
    try {
        const query = "SELECT * FROM users WHERE email = ?"

        const response = await database.getFirstAsync<UserDatabase>(query, `${email}`)

        return response
    } catch (error){
        throw error
    }
   }
   
    return { create, searchByEmail }
}