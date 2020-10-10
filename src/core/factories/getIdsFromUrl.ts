export default function getIdsFromUrls(urls: Array<string>) {
	return urls.map((url: string) => {
		const matchedUrl = url.match(/\d+/g)
		if (matchedUrl) {
			return matchedUrl[0]
		}
		return ""
	})
}
