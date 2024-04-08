<!-- 1.Static Generation 项目购建时，直接产出 HTML 文件 【静态】
2.Server-side rendering 每次请求时动态生成 HTML(需要动态从数据库获取数据并整合计算) 【动态】

以上两种都是服务端处理(SSR)

1.getStaticProps() --- > 只会在 buld 构建时执行，线上环境每次请求(刷新)不会再次请求，每次刷新都返回这个静态文件
2.getServerSideProps()  动态计算：每次请求都会执行一次
-->
