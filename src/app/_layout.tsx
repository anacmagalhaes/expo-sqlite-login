import { initializeDatabase } from "@/database/initializeDatabase"
import { Stack } from "expo-router"
import { SQLiteProvider } from "expo-sqlite"

export default function Layout() {
    return (
        <SQLiteProvider databaseName="userApp.db" onInit={initializeDatabase}>
            <Stack screenOptions={{ headerShown: false }} />
        </SQLiteProvider>

    )
}