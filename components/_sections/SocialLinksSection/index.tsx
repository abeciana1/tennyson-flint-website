import { SocialLinkSectionI } from '@/definitions/interfaces/_sections'
import { SocialLink } from '@/components/_styled/links'
import { SocialLinkI } from '@/definitions/interfaces/_styled/Links'

const SocialLinksSection: React.FC<SocialLinkSectionI> = ({
  blok
}) => {
  const { 
    links
  } = blok
  console.log('blok links', links)
  return (
    <div className='flex gap-3 justify-center my-5'>
      {links.map(({
        _uid,
        title,
        href,
        image
      }: SocialLinkI) => (
        <SocialLink
          key={_uid}
          title={title}
          href={href}
          image={image}
        />
      ))}
    </div>
  )
}

export default SocialLinksSection