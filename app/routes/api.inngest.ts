import { serve } from 'inngest/remix'
import { inngest, sendScheduledMessagesFn } from '#app/utils/inngest.server.js'

const handler = serve({
	client: inngest,
	functions: [sendScheduledMessagesFn],
})

export { handler as action, handler as loader }
