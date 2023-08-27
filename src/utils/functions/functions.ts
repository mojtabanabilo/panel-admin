export const setInput : Function = (setter: Function) => (event: any) => {
    setter(event.target.value)
}