import { SET_BLOG_POSTS, SET_PROJECT_POSTS, RELOAD_LANG_DEPS } from './mutations.type'

export const state = () => ({
  blogPosts: [],
  projectPosts: []
})

export const mutations = {
  [SET_BLOG_POSTS] (state, list) {
    state.blogPosts = list
  },
  [SET_PROJECT_POSTS] (state, list) {
    state.projectPosts = list
  }
}

const reloadLangContent = async (locale, commit) => {
  // Blog collection type
  try {
    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/)
    await commit(SET_BLOG_POSTS, actions.getPosts(locale, blogFiles))
  } catch (error) {
    console.log(error)
  }

  // Project collection type
  try {
    let projectFiles = await require.context('~/assets/content/projects/', false, /\.json$/)
    await commit(SET_PROJECT_POSTS, actions.getPosts(locale, projectFiles))
  } catch (error) {
    console.log(error)
  }
}

export const actions = {
  async [RELOAD_LANG_DEPS] ({ commit }) {
    const locale = this.$i18n.locale || 'pt'
    await reloadLangContent(locale, commit)
  },
  getPosts (locale, files) {
    return files
      .keys()
      .filter(key => key.endsWith(`.${locale}.json`))
      .map(key => {
        let res = files(key)
        res.slug = key.slice(2, -5)
        return res
      })
  },
  async nuxtServerInit ({ commit }) {
    const locale = this.$i18n.locale || 'pt'
    reloadLangContent(locale, commit)
    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
