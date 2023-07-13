import React, { useState } from 'react';
import { Input } from 'antd';
import styles from './AppInput.module.css';
import {SearchOutlined} from "@ant-design/icons";

export default function AppInput(props: any) {
	const [isFocused, setIsFocused] = useState(false);
	
	const handleFocus = () => {
		setIsFocused(true);
	};
	
	const handleBlur = () => {
		setIsFocused(false);
	};
	
	return (
		<div className={styles.inputWrapper}>
			<Input
				suffix={<SearchOutlined style={{color: "var(--green)", fontSize: 20}}/>}
				{...props}
				className={`${styles.input} ${isFocused ? styles.focused : ''}`}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</div>
	);
};
