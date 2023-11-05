/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import template1 from '/public/template1.svg'
import template2 from '/public/template2.svg'
import template3 from '/public/template3.svg'
import template4 from '/public/template4.svg'
import template5 from '/public/template5.svg'
import template6 from '/public/template6.svg'
import { Template } from '@/app/on-boarding/pick-template/page'

export const initialTemplateData: Template = [
  {
    id: 1,
    src: template1.src,
    alt: 'StackedWaves',
    isSelected: false,
  },
  {
    id: 2,
    src: template2.src,
    alt: 'CommunityEyeCatch',
    isSelected: false,
  },
  {
    id: 3,
    src: template3.src,
    alt: 'StackedSteps',
    isSelected: false,
  },
  {
    id: 4,
    src: template4.src,
    alt: 'TechEyeCatch',
    isSelected: false,
  },
  {
    id: 5,
    src: template5.src,
    alt: 'Canvas',
    isSelected: false,
  },
  {
    id: 6,
    src: template6.src,
    alt: 'BlobScene',
    isSelected: false,
  },
]
