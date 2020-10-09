import React from "react"
import clsx from "classnames"

import styles from "./Input.module.scss"

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean | string
}

// eslint-disable-next-line
const Input = React.forwardRef<HTMLInputElement, IInputProps>(function Input(props: IInputProps, ref) {
	const { className: classNameProp, onFocus: onFocusProp, onBlur: onBlurProp, error, ...restProps } = props

	const [isFocused, setFocused] = React.useState<boolean>(false)

	const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		setFocused(false)
		onBlurProp && onBlurProp(event)
	}

	const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		setFocused(true)
		onFocusProp && onFocusProp(event)
	}

	return (
		<div className={clsx(styles.wrapper, error && styles.wrapperErrored, classNameProp)}>
			<div className={clsx(styles.root, isFocused && styles.focused)}>
				<input
					ref={ref}
					className={clsx(styles.input, isFocused && styles.inputFocused, error && styles.inputErrored)}
					onBlur={onBlur}
					onFocus={onFocus}
					{...restProps}
				/>
			</div>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	)
})

Input.defaultProps = {
	error: false,
}

export default Input
