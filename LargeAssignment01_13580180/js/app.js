new Vue ({
	el: '#app',
	data: {

		isShowingCart: false,

		products: [
			{
				id:1,
				name: 'Creator & Everyman (C15)',
				description: '13580242 & 13580251',
				image: 'images/top-1-1.png'
			},
			{
				id:2,
				name: 'Creator & Regular Guy (C04)',
				description: '13580232 & 13580248',
				image: 'images/top-2-1.png'
			},
			{
				id:3,
				name: 'Creator & Jester (C18)',
				description: '13580222 & 13580244',
				image: 'images/top-3-1.png'
			}
		],

		Topproducts: [
			{
				id:1,
				name: 'Explorer & Creater (C01)',
				description: '13580209 & 13580250',
				image: 'images/1.png'
			},
			{
				id:2,
				name: 'Explorer & Innocent (C02)',
				description: '13580182 & 13580190',
				image: 'images/2.png'
			},
			{
				id:3,
				name: 'Love & Everyman (C03)',
				description: '13580180 & 13580246',
				image: 'images/3.png'
			},
			{
				id:4,
				name: 'Creator & Regular Guy (C04)',
				description: '13580232 & 13580248',
				image: 'images/4.png'
			},
			{
				id:5,
				name: 'Explorer & Jeter (C05)',
				description: '13580200 & 13580217',
				image: 'images/5.png'
			},
			{
				id:6,
				name: 'Magician & Creater (C06)',
				description: '13580182 & 13580190',
				image: 'images/6.png'
			},
			{
				id:7,
				name: 'Everyman & Creative (C07)',
				description: '13580180 & 13580246',
				image: 'images/7.png'
			},
			{
				id:8,
				name: 'Outlaw & Everyman (C08)',
				description: '13580232 & 13580248',
				image: 'images/8.png'
			},
		],

		// topProducts: [
		// 	{
		// 		id:4,
		// 		group: 'C15',
		// 		name: 'Creator & Everyman',
		// 		description: '13580242 & 13580251',
		// 		vote: '13580183 , 13580194 , 13580199, 13580209, <br>13580210, 13580213, 13580250'
		// 		image: 'images/fulltop1.png'

		// 	}

		// ]
	},


})