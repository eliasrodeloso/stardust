import React from "react"
import clsx from "classnames"
import { Link } from "@reach/router"

import styles from "./Button.module.scss"

export interface IButtonProps {
	isLink?: boolean
	className?: string
	variant: "primary" | "secondary" | "link"
	size: "small" | "medium" | "large"
	isLoading?: boolean
	isDisabled?: boolean
	to: string
	children: JSX.Element | string
	type: "button" | "submit" | "reset"
	href?: string
}

export default function Button(props: IButtonProps) {
	const {
		isLink,
		to,
		children: childrenProp,
		variant,
		size,
		isLoading,
		isDisabled,
		className: classNameProp,
		type,
		href,
		...restProps
	} = props

	const className = clsx(
		styles.button,
		styles[variant],
		styles[size],
		(isDisabled || isLoading) && styles.disabled,
		classNameProp
	)

	const derivedButtonProps = {
		type,
		className,
		href,
		...restProps,
	}

	const derivedLinkProps = {
		to,
		className,
		...restProps,
	}

	const children = isLoading ? "Loading" : childrenProp

	if (isLink) {
		return <Link {...derivedLinkProps}>{children}</Link>
	}

	return <button {...derivedButtonProps}>{children}</button>
}

Button.defaultProps = {
	isLoading: false,
	isDisabled: false,
	type: "button",
	size: "medium",
	variant: "primary",
}
