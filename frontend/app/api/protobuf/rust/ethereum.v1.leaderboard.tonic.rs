// @generated
/// Generated client implementations.
pub mod leaderboard_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct LeaderboardServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl LeaderboardServiceClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> LeaderboardServiceClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> LeaderboardServiceClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
            >>::Error: Into<StdError> + Send + Sync,
        {
            LeaderboardServiceClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_decoding_message_size(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_encoding_message_size(limit);
            self
        }
        pub async fn get_top_ranker_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<super::GetTopRankerLeaderboardRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetTopRankerLeaderboardResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetTopRankerLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetTopRankerLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_top_ranker(
            &mut self,
            request: impl tonic::IntoRequest<super::GetTopRankerRequest>,
        ) -> std::result::Result<tonic::Response<super::TopRanker>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetTopRanker",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetTopRanker",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn render_top_ranker_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<super::RenderTopRankerLeaderboardRequest>,
        ) -> std::result::Result<tonic::Response<super::ImageResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/RenderTopRankerLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "RenderTopRankerLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_weekly_top_collector_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<
                super::GetWeeklyTopCollectorLeaderboardRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::GetWeeklyTopCollectorLeaderboardResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollectorLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetWeeklyTopCollectorLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_weekly_top_collector(
            &mut self,
            request: impl tonic::IntoRequest<super::GetWeeklyTopCollectorRequest>,
        ) -> std::result::Result<tonic::Response<super::StarHunter>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollector",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetWeeklyTopCollector",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn render_weekly_top_collector_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<
                super::RenderWeeklyStarHunterLeaderboardRequest,
            >,
        ) -> std::result::Result<tonic::Response<super::ImageResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyTopCollectorLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "RenderWeeklyTopCollectorLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_all_time_top_collector_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<
                super::GetAllTimeTopCollectorLeaderboardRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::GetAllTimeTopCollectorLeaderboardResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetAllTimeTopCollectorLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetAllTimeTopCollectorLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_weekly_star_hunter_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<
                super::GetWeeklyStarHunterLeaderboardRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::GetWeeklyStarHunterLeaderboardResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunterLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetWeeklyStarHunterLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_weekly_star_hunter(
            &mut self,
            request: impl tonic::IntoRequest<super::GetWeeklyStarHunterRequest>,
        ) -> std::result::Result<tonic::Response<super::StarHunter>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunter",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "GetWeeklyStarHunter",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn render_weekly_star_hunter_leaderboard(
            &mut self,
            request: impl tonic::IntoRequest<
                super::RenderWeeklyStarHunterLeaderboardRequest,
            >,
        ) -> std::result::Result<tonic::Response<super::ImageResponse>, tonic::Status> {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyStarHunterLeaderboard",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "ethereum.v1.leaderboard.LeaderboardService",
                        "RenderWeeklyStarHunterLeaderboard",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod leaderboard_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with LeaderboardServiceServer.
    #[async_trait]
    pub trait LeaderboardService: Send + Sync + 'static {
        async fn get_top_ranker_leaderboard(
            &self,
            request: tonic::Request<super::GetTopRankerLeaderboardRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetTopRankerLeaderboardResponse>,
            tonic::Status,
        >;
        async fn get_top_ranker(
            &self,
            request: tonic::Request<super::GetTopRankerRequest>,
        ) -> std::result::Result<tonic::Response<super::TopRanker>, tonic::Status>;
        async fn render_top_ranker_leaderboard(
            &self,
            request: tonic::Request<super::RenderTopRankerLeaderboardRequest>,
        ) -> std::result::Result<tonic::Response<super::ImageResponse>, tonic::Status>;
        async fn get_weekly_top_collector_leaderboard(
            &self,
            request: tonic::Request<super::GetWeeklyTopCollectorLeaderboardRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetWeeklyTopCollectorLeaderboardResponse>,
            tonic::Status,
        >;
        async fn get_weekly_top_collector(
            &self,
            request: tonic::Request<super::GetWeeklyTopCollectorRequest>,
        ) -> std::result::Result<tonic::Response<super::StarHunter>, tonic::Status>;
        async fn render_weekly_top_collector_leaderboard(
            &self,
            request: tonic::Request<super::RenderWeeklyStarHunterLeaderboardRequest>,
        ) -> std::result::Result<tonic::Response<super::ImageResponse>, tonic::Status>;
        async fn get_all_time_top_collector_leaderboard(
            &self,
            request: tonic::Request<super::GetAllTimeTopCollectorLeaderboardRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetAllTimeTopCollectorLeaderboardResponse>,
            tonic::Status,
        >;
        async fn get_weekly_star_hunter_leaderboard(
            &self,
            request: tonic::Request<super::GetWeeklyStarHunterLeaderboardRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetWeeklyStarHunterLeaderboardResponse>,
            tonic::Status,
        >;
        async fn get_weekly_star_hunter(
            &self,
            request: tonic::Request<super::GetWeeklyStarHunterRequest>,
        ) -> std::result::Result<tonic::Response<super::StarHunter>, tonic::Status>;
        async fn render_weekly_star_hunter_leaderboard(
            &self,
            request: tonic::Request<super::RenderWeeklyStarHunterLeaderboardRequest>,
        ) -> std::result::Result<tonic::Response<super::ImageResponse>, tonic::Status>;
    }
    #[derive(Debug)]
    pub struct LeaderboardServiceServer<T: LeaderboardService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: LeaderboardService> LeaderboardServiceServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
                max_decoding_message_size: None,
                max_encoding_message_size: None,
            }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.max_decoding_message_size = Some(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.max_encoding_message_size = Some(limit);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for LeaderboardServiceServer<T>
    where
        T: LeaderboardService,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(
            &mut self,
            _cx: &mut Context<'_>,
        ) -> Poll<std::result::Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/ethereum.v1.leaderboard.LeaderboardService/GetTopRankerLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct GetTopRankerLeaderboardSvc<T: LeaderboardService>(pub Arc<T>);
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<super::GetTopRankerLeaderboardRequest>
                    for GetTopRankerLeaderboardSvc<T> {
                        type Response = super::GetTopRankerLeaderboardResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetTopRankerLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_top_ranker_leaderboard(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetTopRankerLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/GetTopRanker" => {
                    #[allow(non_camel_case_types)]
                    struct GetTopRankerSvc<T: LeaderboardService>(pub Arc<T>);
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<super::GetTopRankerRequest>
                    for GetTopRankerSvc<T> {
                        type Response = super::TopRanker;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetTopRankerRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_top_ranker(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetTopRankerSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/RenderTopRankerLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct RenderTopRankerLeaderboardSvc<T: LeaderboardService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<
                        super::RenderTopRankerLeaderboardRequest,
                    > for RenderTopRankerLeaderboardSvc<T> {
                        type Response = super::ImageResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::RenderTopRankerLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).render_top_ranker_leaderboard(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RenderTopRankerLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollectorLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct GetWeeklyTopCollectorLeaderboardSvc<T: LeaderboardService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<
                        super::GetWeeklyTopCollectorLeaderboardRequest,
                    > for GetWeeklyTopCollectorLeaderboardSvc<T> {
                        type Response = super::GetWeeklyTopCollectorLeaderboardResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetWeeklyTopCollectorLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_weekly_top_collector_leaderboard(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetWeeklyTopCollectorLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollector" => {
                    #[allow(non_camel_case_types)]
                    struct GetWeeklyTopCollectorSvc<T: LeaderboardService>(pub Arc<T>);
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<super::GetWeeklyTopCollectorRequest>
                    for GetWeeklyTopCollectorSvc<T> {
                        type Response = super::StarHunter;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetWeeklyTopCollectorRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_weekly_top_collector(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetWeeklyTopCollectorSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyTopCollectorLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct RenderWeeklyTopCollectorLeaderboardSvc<T: LeaderboardService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<
                        super::RenderWeeklyStarHunterLeaderboardRequest,
                    > for RenderWeeklyTopCollectorLeaderboardSvc<T> {
                        type Response = super::ImageResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::RenderWeeklyStarHunterLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .render_weekly_top_collector_leaderboard(request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RenderWeeklyTopCollectorLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/GetAllTimeTopCollectorLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct GetAllTimeTopCollectorLeaderboardSvc<T: LeaderboardService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<
                        super::GetAllTimeTopCollectorLeaderboardRequest,
                    > for GetAllTimeTopCollectorLeaderboardSvc<T> {
                        type Response = super::GetAllTimeTopCollectorLeaderboardResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetAllTimeTopCollectorLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .get_all_time_top_collector_leaderboard(request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetAllTimeTopCollectorLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunterLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct GetWeeklyStarHunterLeaderboardSvc<T: LeaderboardService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<
                        super::GetWeeklyStarHunterLeaderboardRequest,
                    > for GetWeeklyStarHunterLeaderboardSvc<T> {
                        type Response = super::GetWeeklyStarHunterLeaderboardResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetWeeklyStarHunterLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_weekly_star_hunter_leaderboard(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetWeeklyStarHunterLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunter" => {
                    #[allow(non_camel_case_types)]
                    struct GetWeeklyStarHunterSvc<T: LeaderboardService>(pub Arc<T>);
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<super::GetWeeklyStarHunterRequest>
                    for GetWeeklyStarHunterSvc<T> {
                        type Response = super::StarHunter;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetWeeklyStarHunterRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_weekly_star_hunter(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = GetWeeklyStarHunterSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyStarHunterLeaderboard" => {
                    #[allow(non_camel_case_types)]
                    struct RenderWeeklyStarHunterLeaderboardSvc<T: LeaderboardService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: LeaderboardService,
                    > tonic::server::UnaryService<
                        super::RenderWeeklyStarHunterLeaderboardRequest,
                    > for RenderWeeklyStarHunterLeaderboardSvc<T> {
                        type Response = super::ImageResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::RenderWeeklyStarHunterLeaderboardRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .render_weekly_star_hunter_leaderboard(request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RenderWeeklyStarHunterLeaderboardSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => {
                    Box::pin(async move {
                        Ok(
                            http::Response::builder()
                                .status(200)
                                .header("grpc-status", "12")
                                .header("content-type", "application/grpc")
                                .body(empty_body())
                                .unwrap(),
                        )
                    })
                }
            }
        }
    }
    impl<T: LeaderboardService> Clone for LeaderboardServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
                max_decoding_message_size: self.max_decoding_message_size,
                max_encoding_message_size: self.max_encoding_message_size,
            }
        }
    }
    impl<T: LeaderboardService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(Arc::clone(&self.0))
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: LeaderboardService> tonic::server::NamedService
    for LeaderboardServiceServer<T> {
        const NAME: &'static str = "ethereum.v1.leaderboard.LeaderboardService";
    }
}
