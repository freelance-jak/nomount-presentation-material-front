export { default as Logo } from '../../components/Logo.vue'
export { default as Table } from '../../components/Table.vue'
export { default as UploadForm } from '../../components/UploadForm.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyTable = import('../../components/Table.vue' /* webpackChunkName: "components/Table" */).then(c => c.default || c)
export const LazyUploadForm = import('../../components/UploadForm.vue' /* webpackChunkName: "components/UploadForm" */).then(c => c.default || c)
