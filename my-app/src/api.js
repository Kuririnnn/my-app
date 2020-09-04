import axios from 'axios'


const get = async (url, params = {}, headers) => {
    url = url;
    Object.keys(params).map(item => {
        params[item] = decodeURIComponent(params[item])
    })

    try {
        let options = {
            method: 'get',
            url,
            noCache: true,
            params: params,
            timeout: 30000,
            headers
        }

        options.requestId = url
        const response = await axios(options)
        return response
    } catch (err) {
        if (axios.isCancel(err)) {
            console.log(err)
            return {
                isError: true,
                statusCode: -10001,
                message: '接口异常',
                data: null,
                cancel: true
            } //请求如果被取消，这里是返回取消的message
        } else {
            return {
                isError: true,
                statusCode: -10001,
                message: '接口异常',
                data: null
            }
        }

    }
}

const post = async (url, params) => {
    url = url;

    params = params || {}

    try {
        const response = await axios({
            url,
            method: 'post',
            data: params,
            requestId: url,
            timeout: 30000,
            headers: {
                'x-csrf-token': window.CSRF_TOKEN
            }
        })
        return response
    } catch (err) {
        return {
            isError: true,
            statusCode: -10001,
            message: '接口异常',
            data: null
        }
    }
}

export default {
    get,
    post
}