export default defineNuxtRouteMiddleware(
    (): any => {
        return navigateTo('home')
    }
)