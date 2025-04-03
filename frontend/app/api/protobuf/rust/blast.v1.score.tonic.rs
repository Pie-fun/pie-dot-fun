// @generated
/// Generated client implementations.
pub mod invitational_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct InvitationalServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl InvitationalServiceClient<tonic::transport::Channel> {
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
    impl<T> InvitationalServiceClient<T>
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
        ) -> InvitationalServiceClient<InterceptedService<T, F>>
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
            InvitationalServiceClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn list_ss_individual_invitational_events(
            &mut self,
            request: impl tonic::IntoRequest<
                super::ListSsIndividualInvitationalEventsRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::ListSsIndividualInvitationalEventsResponse>,
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
                "/blast.v1.score.InvitationalService/ListSSIndividualInvitationalEvents",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.InvitationalService",
                        "ListSSIndividualInvitationalEvents",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn create_ss_individual_invitational_event(
            &mut self,
            request: impl tonic::IntoRequest<
                super::CreateSsIndividualInvitationalEventRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::SsIndividualInvitationalEvent>,
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
                "/blast.v1.score.InvitationalService/CreateSSIndividualInvitationalEvent",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.InvitationalService",
                        "CreateSSIndividualInvitationalEvent",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_ss_individual_invitational_letter(
            &mut self,
            request: impl tonic::IntoRequest<
                super::GetSsIndividualInvitationalLetterRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::SsIndividualInvitationalLetter>,
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
                "/blast.v1.score.InvitationalService/GetSSIndividualInvitationalLetter",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.InvitationalService",
                        "GetSSIndividualInvitationalLetter",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn invite_ss_individual_invitational_event(
            &mut self,
            request: impl tonic::IntoRequest<
                super::InviteSsIndividualInvitationalEventRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::InviteSsIndividualInvitationalEventResponse>,
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
                "/blast.v1.score.InvitationalService/InviteSSIndividualInvitationalEvent",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.InvitationalService",
                        "InviteSSIndividualInvitationalEvent",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod invitational_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with InvitationalServiceServer.
    #[async_trait]
    pub trait InvitationalService: Send + Sync + 'static {
        async fn list_ss_individual_invitational_events(
            &self,
            request: tonic::Request<super::ListSsIndividualInvitationalEventsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSsIndividualInvitationalEventsResponse>,
            tonic::Status,
        >;
        async fn create_ss_individual_invitational_event(
            &self,
            request: tonic::Request<super::CreateSsIndividualInvitationalEventRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SsIndividualInvitationalEvent>,
            tonic::Status,
        >;
        async fn get_ss_individual_invitational_letter(
            &self,
            request: tonic::Request<super::GetSsIndividualInvitationalLetterRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SsIndividualInvitationalLetter>,
            tonic::Status,
        >;
        async fn invite_ss_individual_invitational_event(
            &self,
            request: tonic::Request<super::InviteSsIndividualInvitationalEventRequest>,
        ) -> std::result::Result<
            tonic::Response<super::InviteSsIndividualInvitationalEventResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct InvitationalServiceServer<T: InvitationalService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: InvitationalService> InvitationalServiceServer<T> {
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
    impl<T, B> tonic::codegen::Service<http::Request<B>> for InvitationalServiceServer<T>
    where
        T: InvitationalService,
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
                "/blast.v1.score.InvitationalService/ListSSIndividualInvitationalEvents" => {
                    #[allow(non_camel_case_types)]
                    struct ListSSIndividualInvitationalEventsSvc<T: InvitationalService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: InvitationalService,
                    > tonic::server::UnaryService<
                        super::ListSsIndividualInvitationalEventsRequest,
                    > for ListSSIndividualInvitationalEventsSvc<T> {
                        type Response = super::ListSsIndividualInvitationalEventsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListSsIndividualInvitationalEventsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .list_ss_individual_invitational_events(request)
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
                        let method = ListSSIndividualInvitationalEventsSvc(inner);
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
                "/blast.v1.score.InvitationalService/CreateSSIndividualInvitationalEvent" => {
                    #[allow(non_camel_case_types)]
                    struct CreateSSIndividualInvitationalEventSvc<
                        T: InvitationalService,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: InvitationalService,
                    > tonic::server::UnaryService<
                        super::CreateSsIndividualInvitationalEventRequest,
                    > for CreateSSIndividualInvitationalEventSvc<T> {
                        type Response = super::SsIndividualInvitationalEvent;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::CreateSsIndividualInvitationalEventRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .create_ss_individual_invitational_event(request)
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
                        let method = CreateSSIndividualInvitationalEventSvc(inner);
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
                "/blast.v1.score.InvitationalService/GetSSIndividualInvitationalLetter" => {
                    #[allow(non_camel_case_types)]
                    struct GetSSIndividualInvitationalLetterSvc<T: InvitationalService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: InvitationalService,
                    > tonic::server::UnaryService<
                        super::GetSsIndividualInvitationalLetterRequest,
                    > for GetSSIndividualInvitationalLetterSvc<T> {
                        type Response = super::SsIndividualInvitationalLetter;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetSsIndividualInvitationalLetterRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .get_ss_individual_invitational_letter(request)
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
                        let method = GetSSIndividualInvitationalLetterSvc(inner);
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
                "/blast.v1.score.InvitationalService/InviteSSIndividualInvitationalEvent" => {
                    #[allow(non_camel_case_types)]
                    struct InviteSSIndividualInvitationalEventSvc<
                        T: InvitationalService,
                    >(
                        pub Arc<T>,
                    );
                    impl<
                        T: InvitationalService,
                    > tonic::server::UnaryService<
                        super::InviteSsIndividualInvitationalEventRequest,
                    > for InviteSSIndividualInvitationalEventSvc<T> {
                        type Response = super::InviteSsIndividualInvitationalEventResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::InviteSsIndividualInvitationalEventRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .invite_ss_individual_invitational_event(request)
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
                        let method = InviteSSIndividualInvitationalEventSvc(inner);
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
    impl<T: InvitationalService> Clone for InvitationalServiceServer<T> {
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
    impl<T: InvitationalService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(Arc::clone(&self.0))
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: InvitationalService> tonic::server::NamedService
    for InvitationalServiceServer<T> {
        const NAME: &'static str = "blast.v1.score.InvitationalService";
    }
}
/// Generated client implementations.
pub mod score_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct ScoreServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl ScoreServiceClient<tonic::transport::Channel> {
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
    impl<T> ScoreServiceClient<T>
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
        ) -> ScoreServiceClient<InterceptedService<T, F>>
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
            ScoreServiceClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn validate_upload_score_and_sign(
            &mut self,
            request: impl tonic::IntoRequest<super::ValidateUploadScoreAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateUploadScoreAndSignResponse>,
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
                "/blast.v1.score.ScoreService/ValidateUploadScoreAndSign",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "ValidateUploadScoreAndSign",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn create_score(
            &mut self,
            request: impl tonic::IntoRequest<super::CreateScoreRequest>,
        ) -> std::result::Result<tonic::Response<super::Score>, tonic::Status> {
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
                "/blast.v1.score.ScoreService/CreateScore",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.score.ScoreService", "CreateScore"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_score(
            &mut self,
            request: impl tonic::IntoRequest<super::GetScoreRequest>,
        ) -> std::result::Result<tonic::Response<super::Score>, tonic::Status> {
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
                "/blast.v1.score.ScoreService/GetScore",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.score.ScoreService", "GetScore"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_user_best_score_ranking(
            &mut self,
            request: impl tonic::IntoRequest<super::GetUserBestScoreRankingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UserBestScoreRanking>,
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
                "/blast.v1.score.ScoreService/GetUserBestScoreRanking",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "GetUserBestScoreRanking",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_user_best_score_rankings(
            &mut self,
            request: impl tonic::IntoRequest<super::ListUserBestScoreRankingsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListUserBestScoreRankingsResponse>,
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
                "/blast.v1.score.ScoreService/ListUserBestScoreRankings",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "ListUserBestScoreRankings",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_user_cumulative_score_ranking(
            &mut self,
            request: impl tonic::IntoRequest<super::GetUserCumulativeScoreRankingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UserCumulativeScoreRanking>,
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
                "/blast.v1.score.ScoreService/GetUserCumulativeScoreRanking",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "GetUserCumulativeScoreRanking",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_user_cumulative_score_rankings(
            &mut self,
            request: impl tonic::IntoRequest<
                super::ListUserCumulativeScoreRankingsRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::ListUserCumulativeScoreRankingsResponse>,
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
                "/blast.v1.score.ScoreService/ListUserCumulativeScoreRankings",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "ListUserCumulativeScoreRankings",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_square_cumulative_score_ranking(
            &mut self,
            request: impl tonic::IntoRequest<
                super::GetSquareCumulativeScoreRankingRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::SquareCumulativeScoreRanking>,
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
                "/blast.v1.score.ScoreService/GetSquareCumulativeScoreRanking",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "GetSquareCumulativeScoreRanking",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_square_cumulative_score_rankings(
            &mut self,
            request: impl tonic::IntoRequest<
                super::ListSquareCumulativeScoreRankingsRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareCumulativeScoreRankingsResponse>,
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
                "/blast.v1.score.ScoreService/ListSquareCumulativeScoreRankings",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "ListSquareCumulativeScoreRankings",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn invalidate_score_rankings_by_user(
            &mut self,
            request: impl tonic::IntoRequest<super::InvalidateScoreRankingsByUserRequest>,
        ) -> std::result::Result<tonic::Response<()>, tonic::Status> {
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
                "/blast.v1.score.ScoreService/InvalidateScoreRankingsByUser",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.score.ScoreService",
                        "InvalidateScoreRankingsByUser",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn dry_run_reward(
            &mut self,
            request: impl tonic::IntoRequest<super::RewardRequest>,
        ) -> std::result::Result<tonic::Response<super::RewardResponse>, tonic::Status> {
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
                "/blast.v1.score.ScoreService/DryRunReward",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.score.ScoreService", "DryRunReward"));
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod score_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with ScoreServiceServer.
    #[async_trait]
    pub trait ScoreService: Send + Sync + 'static {
        async fn validate_upload_score_and_sign(
            &self,
            request: tonic::Request<super::ValidateUploadScoreAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateUploadScoreAndSignResponse>,
            tonic::Status,
        >;
        async fn create_score(
            &self,
            request: tonic::Request<super::CreateScoreRequest>,
        ) -> std::result::Result<tonic::Response<super::Score>, tonic::Status>;
        async fn get_score(
            &self,
            request: tonic::Request<super::GetScoreRequest>,
        ) -> std::result::Result<tonic::Response<super::Score>, tonic::Status>;
        async fn get_user_best_score_ranking(
            &self,
            request: tonic::Request<super::GetUserBestScoreRankingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UserBestScoreRanking>,
            tonic::Status,
        >;
        async fn list_user_best_score_rankings(
            &self,
            request: tonic::Request<super::ListUserBestScoreRankingsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListUserBestScoreRankingsResponse>,
            tonic::Status,
        >;
        async fn get_user_cumulative_score_ranking(
            &self,
            request: tonic::Request<super::GetUserCumulativeScoreRankingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::UserCumulativeScoreRanking>,
            tonic::Status,
        >;
        async fn list_user_cumulative_score_rankings(
            &self,
            request: tonic::Request<super::ListUserCumulativeScoreRankingsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListUserCumulativeScoreRankingsResponse>,
            tonic::Status,
        >;
        async fn get_square_cumulative_score_ranking(
            &self,
            request: tonic::Request<super::GetSquareCumulativeScoreRankingRequest>,
        ) -> std::result::Result<
            tonic::Response<super::SquareCumulativeScoreRanking>,
            tonic::Status,
        >;
        async fn list_square_cumulative_score_rankings(
            &self,
            request: tonic::Request<super::ListSquareCumulativeScoreRankingsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareCumulativeScoreRankingsResponse>,
            tonic::Status,
        >;
        async fn invalidate_score_rankings_by_user(
            &self,
            request: tonic::Request<super::InvalidateScoreRankingsByUserRequest>,
        ) -> std::result::Result<tonic::Response<()>, tonic::Status>;
        async fn dry_run_reward(
            &self,
            request: tonic::Request<super::RewardRequest>,
        ) -> std::result::Result<tonic::Response<super::RewardResponse>, tonic::Status>;
    }
    #[derive(Debug)]
    pub struct ScoreServiceServer<T: ScoreService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: ScoreService> ScoreServiceServer<T> {
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
    impl<T, B> tonic::codegen::Service<http::Request<B>> for ScoreServiceServer<T>
    where
        T: ScoreService,
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
                "/blast.v1.score.ScoreService/ValidateUploadScoreAndSign" => {
                    #[allow(non_camel_case_types)]
                    struct ValidateUploadScoreAndSignSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::ValidateUploadScoreAndSignRequest,
                    > for ValidateUploadScoreAndSignSvc<T> {
                        type Response = super::ValidateUploadScoreAndSignResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ValidateUploadScoreAndSignRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).validate_upload_score_and_sign(request).await
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
                        let method = ValidateUploadScoreAndSignSvc(inner);
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
                "/blast.v1.score.ScoreService/CreateScore" => {
                    #[allow(non_camel_case_types)]
                    struct CreateScoreSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<super::CreateScoreRequest>
                    for CreateScoreSvc<T> {
                        type Response = super::Score;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreateScoreRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).create_score(request).await
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
                        let method = CreateScoreSvc(inner);
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
                "/blast.v1.score.ScoreService/GetScore" => {
                    #[allow(non_camel_case_types)]
                    struct GetScoreSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<super::GetScoreRequest>
                    for GetScoreSvc<T> {
                        type Response = super::Score;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetScoreRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).get_score(request).await };
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
                        let method = GetScoreSvc(inner);
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
                "/blast.v1.score.ScoreService/GetUserBestScoreRanking" => {
                    #[allow(non_camel_case_types)]
                    struct GetUserBestScoreRankingSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<super::GetUserBestScoreRankingRequest>
                    for GetUserBestScoreRankingSvc<T> {
                        type Response = super::UserBestScoreRanking;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetUserBestScoreRankingRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_user_best_score_ranking(request).await
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
                        let method = GetUserBestScoreRankingSvc(inner);
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
                "/blast.v1.score.ScoreService/ListUserBestScoreRankings" => {
                    #[allow(non_camel_case_types)]
                    struct ListUserBestScoreRankingsSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::ListUserBestScoreRankingsRequest,
                    > for ListUserBestScoreRankingsSvc<T> {
                        type Response = super::ListUserBestScoreRankingsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListUserBestScoreRankingsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_user_best_score_rankings(request).await
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
                        let method = ListUserBestScoreRankingsSvc(inner);
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
                "/blast.v1.score.ScoreService/GetUserCumulativeScoreRanking" => {
                    #[allow(non_camel_case_types)]
                    struct GetUserCumulativeScoreRankingSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::GetUserCumulativeScoreRankingRequest,
                    > for GetUserCumulativeScoreRankingSvc<T> {
                        type Response = super::UserCumulativeScoreRanking;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetUserCumulativeScoreRankingRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_user_cumulative_score_ranking(request).await
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
                        let method = GetUserCumulativeScoreRankingSvc(inner);
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
                "/blast.v1.score.ScoreService/ListUserCumulativeScoreRankings" => {
                    #[allow(non_camel_case_types)]
                    struct ListUserCumulativeScoreRankingsSvc<T: ScoreService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::ListUserCumulativeScoreRankingsRequest,
                    > for ListUserCumulativeScoreRankingsSvc<T> {
                        type Response = super::ListUserCumulativeScoreRankingsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListUserCumulativeScoreRankingsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_user_cumulative_score_rankings(request).await
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
                        let method = ListUserCumulativeScoreRankingsSvc(inner);
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
                "/blast.v1.score.ScoreService/GetSquareCumulativeScoreRanking" => {
                    #[allow(non_camel_case_types)]
                    struct GetSquareCumulativeScoreRankingSvc<T: ScoreService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::GetSquareCumulativeScoreRankingRequest,
                    > for GetSquareCumulativeScoreRankingSvc<T> {
                        type Response = super::SquareCumulativeScoreRanking;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::GetSquareCumulativeScoreRankingRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_square_cumulative_score_ranking(request).await
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
                        let method = GetSquareCumulativeScoreRankingSvc(inner);
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
                "/blast.v1.score.ScoreService/ListSquareCumulativeScoreRankings" => {
                    #[allow(non_camel_case_types)]
                    struct ListSquareCumulativeScoreRankingsSvc<T: ScoreService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::ListSquareCumulativeScoreRankingsRequest,
                    > for ListSquareCumulativeScoreRankingsSvc<T> {
                        type Response = super::ListSquareCumulativeScoreRankingsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListSquareCumulativeScoreRankingsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner)
                                    .list_square_cumulative_score_rankings(request)
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
                        let method = ListSquareCumulativeScoreRankingsSvc(inner);
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
                "/blast.v1.score.ScoreService/InvalidateScoreRankingsByUser" => {
                    #[allow(non_camel_case_types)]
                    struct InvalidateScoreRankingsByUserSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<
                        super::InvalidateScoreRankingsByUserRequest,
                    > for InvalidateScoreRankingsByUserSvc<T> {
                        type Response = ();
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::InvalidateScoreRankingsByUserRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).invalidate_score_rankings_by_user(request).await
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
                        let method = InvalidateScoreRankingsByUserSvc(inner);
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
                "/blast.v1.score.ScoreService/DryRunReward" => {
                    #[allow(non_camel_case_types)]
                    struct DryRunRewardSvc<T: ScoreService>(pub Arc<T>);
                    impl<
                        T: ScoreService,
                    > tonic::server::UnaryService<super::RewardRequest>
                    for DryRunRewardSvc<T> {
                        type Response = super::RewardResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RewardRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).dry_run_reward(request).await
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
                        let method = DryRunRewardSvc(inner);
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
    impl<T: ScoreService> Clone for ScoreServiceServer<T> {
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
    impl<T: ScoreService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(Arc::clone(&self.0))
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: ScoreService> tonic::server::NamedService for ScoreServiceServer<T> {
        const NAME: &'static str = "blast.v1.score.ScoreService";
    }
}
