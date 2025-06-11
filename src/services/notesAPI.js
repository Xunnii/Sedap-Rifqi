import axios from 'axios'

const API_URL = "https://tyrluagciynxkgbwpfxd.supabase.co/rest/v1/Note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cmx1YWdjaXlueGtnYndwZnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTQyNzYsImV4cCI6MjA2NTE5MDI3Nn0.7yAuelickLOB8y_mmjzMeO7BSckrZlB71z67QoOjEno"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        // Supabase REST API: DELETE /rest/v1/Note?id=eq.{id}
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
        return response.data;
    }
}