import React from "react"
import clsx from "classnames"

import styles from "./Textarea.module.scss"

interface ITextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean | string
}

// eslint-disable-next-line
const Textarea = React.forwardRef<HTMLTextAreaElement, ITextArea>(function Textarea(props: ITextArea, ref) {
	const { className: classNameProp, onBlur: onBlurProp, onFocus: onFocusProp, error, ...restProps } = props

	const [isFocused, setFocused] = React.useState<boolean>(false)

	const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
		setFocused(false)
		onBlurProp && onBlurProp(event)
	}

	const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
		setFocused(true)
		onFocusProp && onFocusProp(event)
	}

	return (
		<div className={clsx(styles.wrapper, error && styles.wrapperErrored, classNameProp)}>
			<div className={clsx(styles.root, isFocused && styles.focused)}>
				<textarea
					ref={ref}
					className={clsx(styles.element, isFocused && styles.elementFocused, error && styles.inputErrored)}
					onBlur={onBlur}
					onFocus={onFocus}
					{...restProps}
				/>
			</div>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	)
})

Textarea.defaultProps = {
	error: false,
}

export default Textarea
