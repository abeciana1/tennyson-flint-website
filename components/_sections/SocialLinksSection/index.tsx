import { SocialLinkSectionI } from '@/definitions/interfaces/_sections'
import { SocialLink } from '@/components/_styled/links'
import { SocialLinkI } from '@/definitions/interfaces/_styled/Links'

const SocialLinksSection: React.FC<SocialLinkSectionI> = ({
  socialLinks
}) => {
  return (
    <div className='flex'>
      {socialLinks.map(({
        title,
        href,
        image
      }: SocialLinkI, index) => (
        <SocialLink
          key={index}
          title={title}
          href={href}
          image={image}
        />
      ))}
    </div>
  )
}

export default SocialLinksSection