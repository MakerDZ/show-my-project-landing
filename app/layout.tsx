import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import SlideNavigation from "@/components/shared/SlideNavigation";
import NavBar from "@/components/shared/NavBar";

export const metadata: Metadata = {
	title: {
		default: "Show My Project",
		template: `%s - Show My Project`,
	},
	description: "Techie ​တွေ၊ coder တွေ၊ ui/uxer ​တွေ အတွက် ကိုယ်လုပ်ထားတဲ့ project ​​လေးတွေကို sharing လုပ်လို့ရနိုင်မဲ့​ group ​လေးပဲဖြစ်ပါတယ်။",
	themeColor: [
		
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	openGraph : {
		title : "Show My Project",
		description : "Techie ​တွေ၊ coder တွေ၊ ui/uxer ​တွေ အတွက် ကိုယ်လုပ်ထားတဲ့ project ​​လေးတွေကို sharing လုပ်လို့ရနိုင်မဲ့​ group ​လေးပဲဖြစ်ပါတယ်။",
		images : "/thumbnail.png"
	}
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"bg-white font-nunito"
				)}
			>
				<div className="min-h-screen w-screen">
					<SlideNavigation />
					<NavBar />
					{children}
				</div>
			</body>
		</html>
	);
}
