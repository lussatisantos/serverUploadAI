import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTrasncriptionRoute } from "./routes/create-transcription";


const app = fastify()

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTrasncriptionRoute)

app.listen({
    port : 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})