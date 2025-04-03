// @generated
/// Generated client implementations.
pub mod square_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct SquareServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl SquareServiceClient<tonic::transport::Channel> {
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
    impl<T> SquareServiceClient<T>
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
        ) -> SquareServiceClient<InterceptedService<T, F>>
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
            SquareServiceClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn get_square(
            &mut self,
            request: impl tonic::IntoRequest<super::GetSquareRequest>,
        ) -> std::result::Result<tonic::Response<super::Square>, tonic::Status> {
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
                "/blast.v1.square.SquareService/GetSquare",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.square.SquareService", "GetSquare"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_squares(
            &mut self,
            request: impl tonic::IntoRequest<super::ListSquaresRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquaresResponse>,
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
                "/blast.v1.square.SquareService/ListSquares",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.square.SquareService", "ListSquares"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn update_square(
            &mut self,
            request: impl tonic::IntoRequest<super::UpdateSquareRequest>,
        ) -> std::result::Result<tonic::Response<super::Square>, tonic::Status> {
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
                "/blast.v1.square.SquareService/UpdateSquare",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new("blast.v1.square.SquareService", "UpdateSquare"),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_square_weekly_spirits(
            &mut self,
            request: impl tonic::IntoRequest<super::GetSquareWeeklySpiritsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetSquareWeeklySpiritsResponse>,
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
                "/blast.v1.square.SquareService/GetSquareWeeklySpirits",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "GetSquareWeeklySpirits",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn check_mint_eligibility(
            &mut self,
            request: impl tonic::IntoRequest<super::CheckMintEligibilityRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CheckMintEligibilityResponse>,
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
                "/blast.v1.square.SquareService/CheckMintEligibility",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "CheckMintEligibility",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn validate_display_name_availability(
            &mut self,
            request: impl tonic::IntoRequest<
                super::ValidateDisplayNameAvailabilityRequest,
            >,
        ) -> std::result::Result<
            tonic::Response<super::ValidateDisplayNameAvailabilityResponse>,
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
                "/blast.v1.square.SquareService/ValidateDisplayNameAvailability",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "ValidateDisplayNameAvailability",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn create_square_and_sign(
            &mut self,
            request: impl tonic::IntoRequest<super::CreateSquareAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CreateSquareAndSignResponse>,
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
                "/blast.v1.square.SquareService/CreateSquareAndSign",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "CreateSquareAndSign",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn approve_join_square_and_sign(
            &mut self,
            request: impl tonic::IntoRequest<super::ApproveJoinSquareAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ApproveJoinSquareAndSignResponse>,
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
                "/blast.v1.square.SquareService/ApproveJoinSquareAndSign",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "ApproveJoinSquareAndSign",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn approve_transfer_square_and_sign(
            &mut self,
            request: impl tonic::IntoRequest<super::ApproveTransferSquareAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ApproveTransferSquareAndSignResponse>,
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
                "/blast.v1.square.SquareService/ApproveTransferSquareAndSign",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "ApproveTransferSquareAndSign",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_square_weekly_points(
            &mut self,
            request: impl tonic::IntoRequest<super::GetSquareWeeklyPointsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetSquareWeeklyPointsResponse>,
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
                "/blast.v1.square.SquareService/GetSquareWeeklyPoints",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "GetSquareWeeklyPoints",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_square_spirit_histories(
            &mut self,
            request: impl tonic::IntoRequest<super::ListSquareSpiritHistoriesRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareSpiritHistoriesResposne>,
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
                "/blast.v1.square.SquareService/ListSquareSpiritHistories",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "ListSquareSpiritHistories",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_square_members(
            &mut self,
            request: impl tonic::IntoRequest<super::ListSquareMembersRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareMembersResponse>,
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
                "/blast.v1.square.SquareService/ListSquareMembers",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new("blast.v1.square.SquareService", "ListSquareMembers"),
                );
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_square_member_rankings(
            &mut self,
            request: impl tonic::IntoRequest<super::ListSquareMemberRankingsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareMemberRankingsResponse>,
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
                "/blast.v1.square.SquareService/ListSquareMemberRankings",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new(
                        "blast.v1.square.SquareService",
                        "ListSquareMemberRankings",
                    ),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod square_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with SquareServiceServer.
    #[async_trait]
    pub trait SquareService: Send + Sync + 'static {
        async fn get_square(
            &self,
            request: tonic::Request<super::GetSquareRequest>,
        ) -> std::result::Result<tonic::Response<super::Square>, tonic::Status>;
        async fn list_squares(
            &self,
            request: tonic::Request<super::ListSquaresRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquaresResponse>,
            tonic::Status,
        >;
        async fn update_square(
            &self,
            request: tonic::Request<super::UpdateSquareRequest>,
        ) -> std::result::Result<tonic::Response<super::Square>, tonic::Status>;
        async fn get_square_weekly_spirits(
            &self,
            request: tonic::Request<super::GetSquareWeeklySpiritsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetSquareWeeklySpiritsResponse>,
            tonic::Status,
        >;
        async fn check_mint_eligibility(
            &self,
            request: tonic::Request<super::CheckMintEligibilityRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CheckMintEligibilityResponse>,
            tonic::Status,
        >;
        async fn validate_display_name_availability(
            &self,
            request: tonic::Request<super::ValidateDisplayNameAvailabilityRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateDisplayNameAvailabilityResponse>,
            tonic::Status,
        >;
        async fn create_square_and_sign(
            &self,
            request: tonic::Request<super::CreateSquareAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CreateSquareAndSignResponse>,
            tonic::Status,
        >;
        async fn approve_join_square_and_sign(
            &self,
            request: tonic::Request<super::ApproveJoinSquareAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ApproveJoinSquareAndSignResponse>,
            tonic::Status,
        >;
        async fn approve_transfer_square_and_sign(
            &self,
            request: tonic::Request<super::ApproveTransferSquareAndSignRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ApproveTransferSquareAndSignResponse>,
            tonic::Status,
        >;
        async fn get_square_weekly_points(
            &self,
            request: tonic::Request<super::GetSquareWeeklyPointsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::GetSquareWeeklyPointsResponse>,
            tonic::Status,
        >;
        async fn list_square_spirit_histories(
            &self,
            request: tonic::Request<super::ListSquareSpiritHistoriesRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareSpiritHistoriesResposne>,
            tonic::Status,
        >;
        async fn list_square_members(
            &self,
            request: tonic::Request<super::ListSquareMembersRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareMembersResponse>,
            tonic::Status,
        >;
        async fn list_square_member_rankings(
            &self,
            request: tonic::Request<super::ListSquareMemberRankingsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListSquareMemberRankingsResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct SquareServiceServer<T: SquareService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: SquareService> SquareServiceServer<T> {
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
    impl<T, B> tonic::codegen::Service<http::Request<B>> for SquareServiceServer<T>
    where
        T: SquareService,
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
                "/blast.v1.square.SquareService/GetSquare" => {
                    #[allow(non_camel_case_types)]
                    struct GetSquareSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::GetSquareRequest>
                    for GetSquareSvc<T> {
                        type Response = super::Square;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetSquareRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).get_square(request).await };
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
                        let method = GetSquareSvc(inner);
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
                "/blast.v1.square.SquareService/ListSquares" => {
                    #[allow(non_camel_case_types)]
                    struct ListSquaresSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::ListSquaresRequest>
                    for ListSquaresSvc<T> {
                        type Response = super::ListSquaresResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListSquaresRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_squares(request).await
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
                        let method = ListSquaresSvc(inner);
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
                "/blast.v1.square.SquareService/UpdateSquare" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateSquareSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::UpdateSquareRequest>
                    for UpdateSquareSvc<T> {
                        type Response = super::Square;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::UpdateSquareRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).update_square(request).await
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
                        let method = UpdateSquareSvc(inner);
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
                "/blast.v1.square.SquareService/GetSquareWeeklySpirits" => {
                    #[allow(non_camel_case_types)]
                    struct GetSquareWeeklySpiritsSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::GetSquareWeeklySpiritsRequest>
                    for GetSquareWeeklySpiritsSvc<T> {
                        type Response = super::GetSquareWeeklySpiritsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetSquareWeeklySpiritsRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_square_weekly_spirits(request).await
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
                        let method = GetSquareWeeklySpiritsSvc(inner);
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
                "/blast.v1.square.SquareService/CheckMintEligibility" => {
                    #[allow(non_camel_case_types)]
                    struct CheckMintEligibilitySvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::CheckMintEligibilityRequest>
                    for CheckMintEligibilitySvc<T> {
                        type Response = super::CheckMintEligibilityResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CheckMintEligibilityRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).check_mint_eligibility(request).await
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
                        let method = CheckMintEligibilitySvc(inner);
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
                "/blast.v1.square.SquareService/ValidateDisplayNameAvailability" => {
                    #[allow(non_camel_case_types)]
                    struct ValidateDisplayNameAvailabilitySvc<T: SquareService>(
                        pub Arc<T>,
                    );
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<
                        super::ValidateDisplayNameAvailabilityRequest,
                    > for ValidateDisplayNameAvailabilitySvc<T> {
                        type Response = super::ValidateDisplayNameAvailabilityResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ValidateDisplayNameAvailabilityRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).validate_display_name_availability(request).await
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
                        let method = ValidateDisplayNameAvailabilitySvc(inner);
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
                "/blast.v1.square.SquareService/CreateSquareAndSign" => {
                    #[allow(non_camel_case_types)]
                    struct CreateSquareAndSignSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::CreateSquareAndSignRequest>
                    for CreateSquareAndSignSvc<T> {
                        type Response = super::CreateSquareAndSignResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CreateSquareAndSignRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).create_square_and_sign(request).await
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
                        let method = CreateSquareAndSignSvc(inner);
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
                "/blast.v1.square.SquareService/ApproveJoinSquareAndSign" => {
                    #[allow(non_camel_case_types)]
                    struct ApproveJoinSquareAndSignSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::ApproveJoinSquareAndSignRequest>
                    for ApproveJoinSquareAndSignSvc<T> {
                        type Response = super::ApproveJoinSquareAndSignResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ApproveJoinSquareAndSignRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).approve_join_square_and_sign(request).await
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
                        let method = ApproveJoinSquareAndSignSvc(inner);
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
                "/blast.v1.square.SquareService/ApproveTransferSquareAndSign" => {
                    #[allow(non_camel_case_types)]
                    struct ApproveTransferSquareAndSignSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<
                        super::ApproveTransferSquareAndSignRequest,
                    > for ApproveTransferSquareAndSignSvc<T> {
                        type Response = super::ApproveTransferSquareAndSignResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ApproveTransferSquareAndSignRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).approve_transfer_square_and_sign(request).await
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
                        let method = ApproveTransferSquareAndSignSvc(inner);
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
                "/blast.v1.square.SquareService/GetSquareWeeklyPoints" => {
                    #[allow(non_camel_case_types)]
                    struct GetSquareWeeklyPointsSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::GetSquareWeeklyPointsRequest>
                    for GetSquareWeeklyPointsSvc<T> {
                        type Response = super::GetSquareWeeklyPointsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetSquareWeeklyPointsRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_square_weekly_points(request).await
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
                        let method = GetSquareWeeklyPointsSvc(inner);
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
                "/blast.v1.square.SquareService/ListSquareSpiritHistories" => {
                    #[allow(non_camel_case_types)]
                    struct ListSquareSpiritHistoriesSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<
                        super::ListSquareSpiritHistoriesRequest,
                    > for ListSquareSpiritHistoriesSvc<T> {
                        type Response = super::ListSquareSpiritHistoriesResposne;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListSquareSpiritHistoriesRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_square_spirit_histories(request).await
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
                        let method = ListSquareSpiritHistoriesSvc(inner);
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
                "/blast.v1.square.SquareService/ListSquareMembers" => {
                    #[allow(non_camel_case_types)]
                    struct ListSquareMembersSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::ListSquareMembersRequest>
                    for ListSquareMembersSvc<T> {
                        type Response = super::ListSquareMembersResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListSquareMembersRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_square_members(request).await
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
                        let method = ListSquareMembersSvc(inner);
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
                "/blast.v1.square.SquareService/ListSquareMemberRankings" => {
                    #[allow(non_camel_case_types)]
                    struct ListSquareMemberRankingsSvc<T: SquareService>(pub Arc<T>);
                    impl<
                        T: SquareService,
                    > tonic::server::UnaryService<super::ListSquareMemberRankingsRequest>
                    for ListSquareMemberRankingsSvc<T> {
                        type Response = super::ListSquareMemberRankingsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<
                                super::ListSquareMemberRankingsRequest,
                            >,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_square_member_rankings(request).await
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
                        let method = ListSquareMemberRankingsSvc(inner);
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
    impl<T: SquareService> Clone for SquareServiceServer<T> {
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
    impl<T: SquareService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(Arc::clone(&self.0))
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: SquareService> tonic::server::NamedService for SquareServiceServer<T> {
        const NAME: &'static str = "blast.v1.square.SquareService";
    }
}
