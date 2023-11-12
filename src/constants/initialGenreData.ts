import business from '/public//business.png'
import animal from '/public/animal.png'
import event from '/public/event.png'
import food from '/public/food.png'
import game from '/public/game.png'
import health from '/public/health.png'
import hobby from '/public/hobby.png'
import living from '/public/living.png'
import nature from '/public/nature.png'
import other from '/public/other.png'
import programming from '/public/programming.png'
import shopping from '/public/shopping.png'
import sports from '/public/sports.png'
import travel from '/public/travel.png'
import { GenreData } from '@/app/on-boarding/select-type/page'

export const initialGenreData: GenreData = [
  {
    name: '勉強',
    genre: 'programming',
    image: programming.src,
    isSelected: false,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/computer_programmer.png',
  },
  {
    name: '趣味',
    genre: 'hobby',
    image: hobby.src,
    isSelected: false,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/tasyumi_kiyoubinbou.png',
  },
  {
    name: '自然',
    genre: 'nature',
    isSelected: false,
    image: nature.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/nature_color.png',
  },
  {
    name: '動物',
    genre: 'animal',
    isSelected: false,
    image: animal.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/animal_color.png',
  },
  {
    name: '健康',
    genre: 'health',
    isSelected: false,
    image: health.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/helth_color.png',
  },
  {
    name: '食べ物・料理',
    genre: 'food',
    isSelected: false,
    image: food.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/food_omoide.png',
  },
  {
    name: 'スポーツ',
    genre: 'sports',
    isSelected: false,
    image: sports.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/sports_ultimate.png',
  },
  {
    name: 'ゲーム',
    genre: 'game',
    isSelected: false,
    image: game.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/game_controller.png',
  },
  {
    name: 'ショッピング',
    genre: 'shopping',
    isSelected: false,
    image: shopping.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/shopping_cart.png',
  },
  {
    name: '旅行',
    genre: 'travel',
    isSelected: false,
    image: travel.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/travel_color.png',
  },
  {
    name: '生活',
    genre: 'living',
    isSelected: false,
    image: living.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/living_color.png',
  },
  {
    name: 'イベント',
    genre: 'event',
    isSelected: false,
    image: event.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/pinata_halloween_bat_girl.png',
  },
  {
    name: '仕事',
    genre: 'business',
    isSelected: false,
    image: business.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/businessman_workaholic.png',
  },
  {
    name: 'その他',
    genre: 'other',
    isSelected: false,
    image: other.src,
    ogpImage:
      'https://youliangdao.s3.ap-northeast-1.amazonaws.com/17412_color.png',
  },
]
