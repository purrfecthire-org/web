export const redirect = (event, url:string) => {
    event.preventDefault()
    window.open(url, '_blank')
}