// @generated
/// Generated client implementations.
pub mod nft_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct NftServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl NftServiceClient<tonic::transport::Channel> {
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
    impl<T> NftServiceClient<T>
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
        ) -> NftServiceClient<InterceptedService<T, F>>
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
            NftServiceClient::new(InterceptedService::new(inner, interceptor))
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
        pub async fn get_nft(
            &mut self,
            request: impl tonic::IntoRequest<super::GetNftRequest>,
        ) -> std::result::Result<tonic::Response<super::Nft>, tonic::Status> {
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
                "/blast.v1.nft.NFTService/GetNFT",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "GetNFT"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_nf_ts(
            &mut self,
            request: impl tonic::IntoRequest<super::ListNfTsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListNfTsResponse>,
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
                "/blast.v1.nft.NFTService/ListNFTs",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "ListNFTs"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_owners(
            &mut self,
            request: impl tonic::IntoRequest<super::ListOwnersRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListOwnersResponse>,
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
                "/blast.v1.nft.NFTService/ListOwners",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "ListOwners"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn validate_nft_access(
            &mut self,
            request: impl tonic::IntoRequest<super::ValidateNftAccessRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateNftAccessResponse>,
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
                "/blast.v1.nft.NFTService/ValidateNFTAccess",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "ValidateNFTAccess"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_nf_ts_delegate(
            &mut self,
            request: impl tonic::IntoRequest<super::ListNfTsDelegateRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListNfTsResponse>,
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
                "/blast.v1.nft.NFTService/ListNFTsDelegate",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "ListNFTsDelegate"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn validate_nft(
            &mut self,
            request: impl tonic::IntoRequest<super::ValidateNftRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateNftResponse>,
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
                "/blast.v1.nft.NFTService/ValidateNFT",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "ValidateNFT"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn get_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::GetContractRequest>,
        ) -> std::result::Result<tonic::Response<super::NftContract>, tonic::Status> {
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
                "/blast.v1.nft.NFTService/GetContract",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("blast.v1.nft.NFTService", "GetContract"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn check_holder_of_contract(
            &mut self,
            request: impl tonic::IntoRequest<super::CheckHolderOfContractRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CheckHolderOfContractResponse>,
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
                "/blast.v1.nft.NFTService/CheckHolderOfContract",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(
                    GrpcMethod::new("blast.v1.nft.NFTService", "CheckHolderOfContract"),
                );
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod nft_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with NftServiceServer.
    #[async_trait]
    pub trait NftService: Send + Sync + 'static {
        async fn get_nft(
            &self,
            request: tonic::Request<super::GetNftRequest>,
        ) -> std::result::Result<tonic::Response<super::Nft>, tonic::Status>;
        async fn list_nf_ts(
            &self,
            request: tonic::Request<super::ListNfTsRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListNfTsResponse>,
            tonic::Status,
        >;
        async fn list_owners(
            &self,
            request: tonic::Request<super::ListOwnersRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListOwnersResponse>,
            tonic::Status,
        >;
        async fn validate_nft_access(
            &self,
            request: tonic::Request<super::ValidateNftAccessRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateNftAccessResponse>,
            tonic::Status,
        >;
        async fn list_nf_ts_delegate(
            &self,
            request: tonic::Request<super::ListNfTsDelegateRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ListNfTsResponse>,
            tonic::Status,
        >;
        async fn validate_nft(
            &self,
            request: tonic::Request<super::ValidateNftRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateNftResponse>,
            tonic::Status,
        >;
        async fn get_contract(
            &self,
            request: tonic::Request<super::GetContractRequest>,
        ) -> std::result::Result<tonic::Response<super::NftContract>, tonic::Status>;
        async fn check_holder_of_contract(
            &self,
            request: tonic::Request<super::CheckHolderOfContractRequest>,
        ) -> std::result::Result<
            tonic::Response<super::CheckHolderOfContractResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct NftServiceServer<T: NftService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: NftService> NftServiceServer<T> {
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
    impl<T, B> tonic::codegen::Service<http::Request<B>> for NftServiceServer<T>
    where
        T: NftService,
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
                "/blast.v1.nft.NFTService/GetNFT" => {
                    #[allow(non_camel_case_types)]
                    struct GetNFTSvc<T: NftService>(pub Arc<T>);
                    impl<T: NftService> tonic::server::UnaryService<super::GetNftRequest>
                    for GetNFTSvc<T> {
                        type Response = super::Nft;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetNftRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).get_nft(request).await };
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
                        let method = GetNFTSvc(inner);
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
                "/blast.v1.nft.NFTService/ListNFTs" => {
                    #[allow(non_camel_case_types)]
                    struct ListNFTsSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::ListNfTsRequest>
                    for ListNFTsSvc<T> {
                        type Response = super::ListNfTsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListNfTsRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).list_nf_ts(request).await };
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
                        let method = ListNFTsSvc(inner);
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
                "/blast.v1.nft.NFTService/ListOwners" => {
                    #[allow(non_camel_case_types)]
                    struct ListOwnersSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::ListOwnersRequest>
                    for ListOwnersSvc<T> {
                        type Response = super::ListOwnersResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListOwnersRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).list_owners(request).await };
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
                        let method = ListOwnersSvc(inner);
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
                "/blast.v1.nft.NFTService/ValidateNFTAccess" => {
                    #[allow(non_camel_case_types)]
                    struct ValidateNFTAccessSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::ValidateNftAccessRequest>
                    for ValidateNFTAccessSvc<T> {
                        type Response = super::ValidateNftAccessResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ValidateNftAccessRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).validate_nft_access(request).await
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
                        let method = ValidateNFTAccessSvc(inner);
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
                "/blast.v1.nft.NFTService/ListNFTsDelegate" => {
                    #[allow(non_camel_case_types)]
                    struct ListNFTsDelegateSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::ListNfTsDelegateRequest>
                    for ListNFTsDelegateSvc<T> {
                        type Response = super::ListNfTsResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ListNfTsDelegateRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).list_nf_ts_delegate(request).await
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
                        let method = ListNFTsDelegateSvc(inner);
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
                "/blast.v1.nft.NFTService/ValidateNFT" => {
                    #[allow(non_camel_case_types)]
                    struct ValidateNFTSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::ValidateNftRequest>
                    for ValidateNFTSvc<T> {
                        type Response = super::ValidateNftResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ValidateNftRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).validate_nft(request).await
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
                        let method = ValidateNFTSvc(inner);
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
                "/blast.v1.nft.NFTService/GetContract" => {
                    #[allow(non_camel_case_types)]
                    struct GetContractSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::GetContractRequest>
                    for GetContractSvc<T> {
                        type Response = super::NftContract;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::GetContractRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).get_contract(request).await
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
                        let method = GetContractSvc(inner);
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
                "/blast.v1.nft.NFTService/CheckHolderOfContract" => {
                    #[allow(non_camel_case_types)]
                    struct CheckHolderOfContractSvc<T: NftService>(pub Arc<T>);
                    impl<
                        T: NftService,
                    > tonic::server::UnaryService<super::CheckHolderOfContractRequest>
                    for CheckHolderOfContractSvc<T> {
                        type Response = super::CheckHolderOfContractResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::CheckHolderOfContractRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).check_holder_of_contract(request).await
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
                        let method = CheckHolderOfContractSvc(inner);
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
    impl<T: NftService> Clone for NftServiceServer<T> {
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
    impl<T: NftService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(Arc::clone(&self.0))
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: NftService> tonic::server::NamedService for NftServiceServer<T> {
        const NAME: &'static str = "blast.v1.nft.NFTService";
    }
}
