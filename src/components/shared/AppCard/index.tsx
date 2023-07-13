import React, {PropsWithChildren} from 'react';
import styles from './AppCard.module.css';
import {message, Typography} from "antd";
import Image from "next/image";
import node from "@/assets/images/node.svg"

interface AppCardProps extends PropsWithChildren {
	title: string,
	status?: any,
	subtitle?: any,
	subNode?: any,
	footer?: any
}

export default function AppCard({title, status, subtitle, subNode, children, footer}: AppCardProps) {
	return (
		<div className={`${styles.card} ${styles.lastestCard}`}>
			<div className={`${styles.cardHeader}`}>
			<div style={{display: "flex", flexDirection: "column"}}>

				<div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
					<Typography.Text className={styles.cardTitle}>{title}</Typography.Text>
					{ status === "Success" &&
						<Typography.Text className={styles.successState}>{status}</Typography.Text>
					}
					{ status === "Failed" &&
						<Typography.Text className={styles.failedState}>{status}</Typography.Text>
					}
				</div>

				{subNode &&
					<div style={{display: "flex", gap: 12, marginTop: 8}}>
						<Image width={24} src={node} alt={"node"}/>
						<Typography.Text style={{fontSize: 16}}>{subNode}</Typography.Text>
					</div>}

				{ subtitle && <ul className={styles.subTitle}>
					<li>
						<Typography.Text>{subtitle.name} ID: {""}
							<Typography.Text style={{fontWeight: "bold"}}>{subtitle.id}</Typography.Text>
							<Typography.Text>-{subtitle.subKey}</Typography.Text>
						</Typography.Text>
					</li>

					{subtitle.evmAddress !== "undefined" && <li>
						<Typography.Text>
							EVM Address: <Typography.Text style={{color: "var(--green)"}}>{subtitle.evmAddress}</Typography.Text>
						</Typography.Text>
						<Typography.Text
							className={styles.copy}
							onClick={() => {
								navigator.clipboard.writeText(`${subtitle.evmAddress}`).then(() => {
									message.success('Copied to clipboard')
								})
							}}
						>Copy</Typography.Text>
					</li>}
				</ul>}
			</div>
			</div>
			<div className={styles.cardBody}>
				{children}
			</div>
			<div className={styles.cardBody}>
				{footer}
			</div>
		</div>
	);
};
