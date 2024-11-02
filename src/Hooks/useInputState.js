const useInputState = (defaultValu = null) =>{
    const [value, setValue] = ((defaultValu = null))

    const handelChang = (e) =>{
        setValue(e.target.value)
    }
    return [value, handelChang]
}
export default useInputState