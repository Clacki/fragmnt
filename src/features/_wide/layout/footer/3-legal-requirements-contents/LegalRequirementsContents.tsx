import FooterLink from "../footer-link/FooterLink"

const LegalRequirementsContents = () => {
  return (
    <>
      <p className="text-text-disabled text-sm">
        © 2026 fragmnt. All rights reserved.
      </p>
      <FooterLink to="/" isDim>
        Privacy Policy
      </FooterLink>
      <FooterLink to="/" isDim>
        Terms of Service
      </FooterLink>
    </>
  )
}

export default LegalRequirementsContents
