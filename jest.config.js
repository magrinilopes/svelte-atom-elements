export default {
	bail: false,
	moduleFileExtensions: ['js', 'svelte'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-jester'
	},
	moduleNameMapper: {},
	transformIgnorePatterns: [],
	verbose: true
}
