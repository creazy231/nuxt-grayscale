import webpack from 'webpack';

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Grayscale - Start Bootstrap Theme',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Varela+Round'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'},
        ]
    },
    css: [
        {src: 'node_modules/bootstrap/dist/css/bootstrap.css'},
        {src: '~/assets/css/grayscale.min.css'},
        {src: '~/assets/css/fontawesome-free/css/all.min.css'},
    ],
    plugins: [
        '~plugins/bootstrap.js'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        vendor: ['jquery', 'bootstrap/dist/js/bootstrap.bundle', '~/assets/js/jquery.easing.min.js', '~/assets/js/grayscale.min.js'],
        plugins: [
            // set shortcuts as global for bootstrap
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    },
};

