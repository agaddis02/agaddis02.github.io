import * as React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function Resume(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section>
				<h1>Resume</h1>
			</section>
		</Layout>
	)
}
