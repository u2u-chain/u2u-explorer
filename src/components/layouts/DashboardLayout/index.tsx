import {PropsWithChildren} from "react";
import FooterDashboardLayout from "@/components/layouts/DashboardLayout/FooterLayout";
import HeaderDashboardLayout from "@/components/layouts/DashboardLayout/HeaderLayout";
import {useRouter} from "next/router";
import {Layout} from "antd";
import InformationScan from "@/components/app/home2/InformationScan";

export default function DashboardLayout({children}: PropsWithChildren) {
	const router = useRouter()

	return (
		<Layout>
			<HeaderDashboardLayout/>
			<Layout.Content>
				{
					(router.pathname === "/"  || 	router.pathname === "/home-02" )  && <InformationScan />
				}
				<div
					style={{
						maxWidth: "var(--maxWidth)",
						margin: "0 auto",
						padding: "30px 12px",
						minHeight: 720
					}}
					>
					{children}
				</div>
			</Layout.Content>
			<FooterDashboardLayout/>
		</Layout>
	)
}