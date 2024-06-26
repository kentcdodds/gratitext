import { Inngest } from 'inngest'

export const inngest = new Inngest({
	id: 'gratitext',
})

export const sendScheduledMessagesFn = inngest.createFunction(
	{ id: 'send-scheduled-messages' },
	{ cron: '*/50 * * * *' },
	async ({ step }) => {
		console.log('yeah buddy')
		const result = await step.run('log-scheduled-messages', async () => {
			console.log('wahoo')
			return null
		})
		return result
	},
)
