import React from "react"
import { RouteComponentProps } from "@reach/router"

import styles from "./HomePage.module.scss"

interface AboutPageProps extends RouteComponentProps {}

export default function HomePage(props: AboutPageProps) {
	return <div className={styles.wrapper}>Home</div>
}
