import * as React from "react"
import * as PropTypes from "prop-types"
import "./sociallinks.scss"

import { FaGithub, FaLinkedin } from "react-icons/fa"


// Edit these to add or remove social media icons.
const socialMediaAccounts = [
	{ id: 1,
		icon: FaGithub,
		url: "https://github.com/agaddis02" },
	{
		id: 2,
		icon: FaLinkedin,
		url: "https://www.linkedin.com/in/adam-t-gaddis-/",
	},
]

const SocialLinks = ({ className }) => (
	<div className={`SocialLinks ${className}`}>
		{socialMediaAccounts.map(account => (
			<a
				href={account.url}
				key={account.id}
				className={`SocialLinks__container ${className}__container`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<account.icon className={`SocialLinks__icon ${className}__icon`} />
			</a>
		))}
	</div>
)

export default SocialLinks
