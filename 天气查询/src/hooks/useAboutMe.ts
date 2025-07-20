import { reactive, ref } from "vue";
export default function useAboutMe() {
    const state = reactive([{
        show: ref('<a href="https://hanyu.baidu.com/hanyu-page/zici/s?wd=%E6%97%A0&ptype=zici" target="_blank" style="text-decoration: none; display="flex" width="100%""><i class="iconfont icon-phone" style="font-size: 40px;"></i><i class="iconfont icon-arrow-right"></i></a>'),
    },
    {
        show: ref('<i class="iconfont icon-email-fill" style="font-size: 40px;" ></i><i class="iconfont icon-arrow-right"></i>'),
    },
    {
        show: ref('<i class="iconfont icon-alipay" style="font-size: 40px;" ></i><i class="iconfont icon-arrow-right"></i>'),
    },
    {
        show: ref('<i class="iconfont icon-icon-test1" style="font-size: 40px;" ></i><i class="iconfont icon-arrow-right"></i>'),
    },
    {
        show: ref('<i class="iconfont icon-icon-test" style="font-size: 40px;" ></i><i class="iconfont icon-arrow-right"></i>'),
    },
    {
        show: ref('<i class="iconfont icon-money-finance-seller-fill" style="font-size: 40px;" ></i><i class="iconfont icon-arrow-right"></i>'),
    },]);


    return { state }
}