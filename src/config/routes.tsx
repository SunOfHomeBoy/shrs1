import Shrs from '../views/Shrs'
import home from '../views/Home'
import ItemCard from '../views/ItemCard'
import IntoWorld from '../views/IntoWorld'
import Certificate from '../views/Certificate'

import Servers from '../views/Server'
import * as Services from '../views/Services'

import Case from '../views/Case'
import * as Construction from '../views/ConstructionCase'

import Team from '../views/Team'
import * as TeamImgs from '../views/TeamImgs'

import News from '../views/News'
import * as NewsList from '../views/NewsCard'

import Talents from '../views/Talents'
import Contact from '../views/Contact'

export const routes: any[] = [
        {
                path: '/',
                component: Shrs,
                children: [
                        {
                                path: '',
                                component: home
                        },
                        {
                                path: '/itemCard',
                                component: ItemCard,
                                children: [
                                        {
                                                path: 'into',
                                                component: IntoWorld
                                        },
                                        {
                                                path: 'honor',
                                                component: Certificate
                                        },
                                        {
                                                path: 'server',
                                                component: Servers,
                                                children: [
                                                        {
                                                                path: '',
                                                                component: Services.Items
                                                        },
                                                        {
                                                                path: 'Item1',
                                                                component: Services.Item1
                                                        },
                                                        {
                                                                path: 'Item2',
                                                                component: Services.Item2
                                                        },
                                                        {
                                                                path: 'Item3',
                                                                component: Services.Item3
                                                        },
                                                        {
                                                                path: 'Item4',
                                                                component: Services.Item4
                                                        },
                                                        {
                                                                path: 'Item5',
                                                                component: Services.Item5
                                                        },
                                                        {
                                                                path: 'Item6',
                                                                component: Services.Item6
                                                        },
                                                        {
                                                                path: 'Item7',
                                                                component: Services.Item7
                                                        },
                                                        {
                                                                path: 'Item8',
                                                                component: Services.Item8
                                                        },
                                                        {
                                                                path: 'Item9',
                                                                component: Services.Item9
                                                        },
                                                        {
                                                                path: 'Item10',
                                                                component: Services.Item10
                                                        },
                                                        {
                                                                path: 'Item11',
                                                                component: Services.Item11
                                                        }
                                                ]
                                        },
                                        {
                                                path: 'case',
                                                component: Case,
                                                children: [
                                                        {
                                                                path: '',
                                                                component: Construction.CaseList
                                                        },
                                                        {
                                                                path: ':id',
                                                                component: Construction.Protect
                                                        }
                                                ]
                                        },
                                        {
                                                path: 'team',
                                                component: Team,
                                                children: [
                                                        {
                                                                path: '',
                                                                component: TeamImgs.Imgs
                                                        },
                                                        {
                                                                path: ':id',
                                                                component: TeamImgs.Img1
                                                        }
                                                ]
                                        },
                                        {
                                                path: 'news',
                                                component: News,
                                                children: [
                                                        {
                                                                path: '',
                                                                component: NewsList.NewsList
                                                        },
                                                        {
                                                                path: ':id',
                                                                component: NewsList.NewsDetail
                                                        },
                                                ]
                                        },
                                        {
                                                path: 'talents',
                                                component: Talents
                                        },
                                        {
                                                path: 'contact',
                                                component: Contact
                                        }
                                ]
                        }
                ]
        }
]