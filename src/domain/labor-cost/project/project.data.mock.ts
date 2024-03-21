export const optionList = [
	"同步修改之前的价格",
    "影响修改之后的价格",
];

export const tabList = [
	'实时计算模式',
	'入库倒推模式',
];

export const data = [
	{
		mainId: 0,
		projectId: 0,
		name: '',
		mode: '实时计算模式',
		date: '',
		modifyScenario: [
			{
				date: [],
				scope: '',
				mode: '',
			},
			{
				date: [],
				scope: '',
				mode: '',
			},
		],
	},
	{
		mainId: 0,
		projectId: 0,
		name: '',
		mode: '入库倒推模式',
		date: '',
		modifyScenario: [
			{
				date: [],
				scope: '',
				mode: '',
			},
			{
				date: [],
				scope: '',
				mode: '',
			},
		],
	},
];


export type Model = typeof data[0];