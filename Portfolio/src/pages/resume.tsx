import * as React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function Resume(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section>
				<h1 id="resumeHeader">Resume</h1>
				<h6 id="resumeDescription">I will add a little background to my resume here below. I graduated recently, Spring 2020, from Emmett J Conrad Global Collegiate Academy, a High School that affored me the opprotunity to earn both my High School Diploma and my Associates of Applied Science in Software Programming / Development from Dallas Collge (Formerly Richland College). I now attend the University of North Texas at Dallas and major in Business Analytics with a planned graduation data of Winter 2022. I have had the opprotunity to intern for Scout Energy Partners, UNTD, STEMuli, and Goldman Sachs (This upcoming summer) all working in Data Science / Analytical Roles. My ultimate goal is to become a Data Scientist and ultimately delve deeper into how data is powering us as people.</h6>
				<iframe src="../../resume.pdf" width="100%" height="1200px"> Resume</iframe>
			</section>
		</Layout>
	)
}
