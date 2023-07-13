import React, {useEffect, useState} from "react";
import styles from './LoadingScreen.module.css';
import {LoadingOutlined} from "@ant-design/icons";

export default function LoadingScreen() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setTimeout(() => setLoaded(true), 300)
	}, []);
	if (loaded) return <></>;
	return (
		<div className={styles.outer}>
			<LoadingOutlined spin/>
		</div>
	)
}
