const button = ({ btn_name, type, name, value, button_status, form, form_action, formno_validate, form_target, style_css }, { btn_action, callBackFunc }) => {

    return (
        <button
            type={type}
            name={name}
            value={value}
            disabled={button_status}
            form={form}
            formAction={form_action}
            formNoValidate={formno_validate}
            formTarget={form_target}
            style={style_css}
            {...btn_action = callBackFunc}

        >
            {btn_name}
        </button>
    )
}
{/* <button type="submit" style={styles.button} >Submit</button> */ }

export default button