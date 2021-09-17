import { NextJS } from '../Icons/Nextjs'
import { ReactSvg } from '../Icons/ReactSvg'
import { Js } from '../Icons/Js'
import { GitHubActions } from '../Icons/GitHubActions'
import { Anchor } from '../anchor'

export function CardProject ({ description, github, title, website, img }) {
  const [t0, t1, t2, ...restOfTitle] = title.split(' ')
  return (
    <div className='card'>
      <picture className='card_image'>
        <div>
          <NextJS />
          <ReactSvg />
          <Js />
          <GitHubActions />
        </div>
        <img
          className='card_bg'
          src={img}
          alt=''
        />
      </picture>
      <div>
        <h2 className='subTitle'><span>{t0}</span> {t1} {t2} {restOfTitle}</h2>
        <p>{description}</p>
        <div className='anchors'>
          <Anchor
            href={github}
            text='GitHub'
          />
          <Anchor
            href={website}
            text='Site'
          />
        </div>
      </div>
    </div>
  )
}
