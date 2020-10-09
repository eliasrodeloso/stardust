interface IActionType<PayloadType> {
	type: string
	payload: PayloadType
}
type Payload = any | undefined

export default function actionFactory(type: string, payload?: Payload): IActionType<Payload> {
	return {
		type,
		payload,
	}
}
