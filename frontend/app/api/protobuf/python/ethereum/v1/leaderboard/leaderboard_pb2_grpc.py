# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from ethereum.v1.leaderboard import leaderboard_pb2 as ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2


class LeaderboardServiceStub(object):
    """LeaderboardService contains the function to get leaderboard
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetTopRankerLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetTopRankerLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerLeaderboardResponse.FromString,
                )
        self.GetTopRanker = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetTopRanker',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.TopRanker.FromString,
                )
        self.RenderTopRankerLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/RenderTopRankerLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderTopRankerLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.FromString,
                )
        self.GetWeeklyTopCollectorLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollectorLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorLeaderboardResponse.FromString,
                )
        self.GetWeeklyTopCollector = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollector',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.StarHunter.FromString,
                )
        self.RenderWeeklyTopCollectorLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyTopCollectorLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderWeeklyStarHunterLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.FromString,
                )
        self.GetAllTimeTopCollectorLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetAllTimeTopCollectorLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetAllTimeTopCollectorLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetAllTimeTopCollectorLeaderboardResponse.FromString,
                )
        self.GetWeeklyStarHunterLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunterLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterLeaderboardResponse.FromString,
                )
        self.GetWeeklyStarHunter = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunter',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.StarHunter.FromString,
                )
        self.RenderWeeklyStarHunterLeaderboard = channel.unary_unary(
                '/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyStarHunterLeaderboard',
                request_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderWeeklyStarHunterLeaderboardRequest.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.FromString,
                )


class LeaderboardServiceServicer(object):
    """LeaderboardService contains the function to get leaderboard
    """

    def GetTopRankerLeaderboard(self, request, context):
        """GetTopRankerLeaderboard will return best score leaderboard
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetTopRanker(self, request, context):
        """GetTopRanker will return weekly top collector.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RenderTopRankerLeaderboard(self, request, context):
        """RenderTopRankerLeaderboard will render weekly top collectors image.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetWeeklyTopCollectorLeaderboard(self, request, context):
        """GetWeeklyTopCollectorLeaderboard will return weekly top collectors.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetWeeklyTopCollector(self, request, context):
        """GetWeeklyTopCollector will return weekly top collector.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RenderWeeklyTopCollectorLeaderboard(self, request, context):
        """RenderWeeklyTopCollectorLeaderboard will render weekly top collectors image.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAllTimeTopCollectorLeaderboard(self, request, context):
        """GetAllTimeTopCollectorLeaderboard will return all time top collectors.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetWeeklyStarHunterLeaderboard(self, request, context):
        """GetWeeklyStarHunterLeaderboard will return weekly top collectors.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetWeeklyStarHunter(self, request, context):
        """GetWeeklyStarHunter will return weekly top collector.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RenderWeeklyStarHunterLeaderboard(self, request, context):
        """RenderWeeklyStarHunterLeaderboard will render weekly top collectors image.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_LeaderboardServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetTopRankerLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.GetTopRankerLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerLeaderboardResponse.SerializeToString,
            ),
            'GetTopRanker': grpc.unary_unary_rpc_method_handler(
                    servicer.GetTopRanker,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.TopRanker.SerializeToString,
            ),
            'RenderTopRankerLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.RenderTopRankerLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderTopRankerLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.SerializeToString,
            ),
            'GetWeeklyTopCollectorLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.GetWeeklyTopCollectorLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorLeaderboardResponse.SerializeToString,
            ),
            'GetWeeklyTopCollector': grpc.unary_unary_rpc_method_handler(
                    servicer.GetWeeklyTopCollector,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.StarHunter.SerializeToString,
            ),
            'RenderWeeklyTopCollectorLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.RenderWeeklyTopCollectorLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderWeeklyStarHunterLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.SerializeToString,
            ),
            'GetAllTimeTopCollectorLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAllTimeTopCollectorLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetAllTimeTopCollectorLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetAllTimeTopCollectorLeaderboardResponse.SerializeToString,
            ),
            'GetWeeklyStarHunterLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.GetWeeklyStarHunterLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterLeaderboardResponse.SerializeToString,
            ),
            'GetWeeklyStarHunter': grpc.unary_unary_rpc_method_handler(
                    servicer.GetWeeklyStarHunter,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.StarHunter.SerializeToString,
            ),
            'RenderWeeklyStarHunterLeaderboard': grpc.unary_unary_rpc_method_handler(
                    servicer.RenderWeeklyStarHunterLeaderboard,
                    request_deserializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderWeeklyStarHunterLeaderboardRequest.FromString,
                    response_serializer=ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ethereum.v1.leaderboard.LeaderboardService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class LeaderboardService(object):
    """LeaderboardService contains the function to get leaderboard
    """

    @staticmethod
    def GetTopRankerLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetTopRankerLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerLeaderboardResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetTopRanker(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetTopRanker',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetTopRankerRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.TopRanker.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RenderTopRankerLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/RenderTopRankerLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderTopRankerLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetWeeklyTopCollectorLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollectorLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorLeaderboardResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetWeeklyTopCollector(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyTopCollector',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyTopCollectorRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.StarHunter.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RenderWeeklyTopCollectorLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyTopCollectorLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderWeeklyStarHunterLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetAllTimeTopCollectorLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetAllTimeTopCollectorLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetAllTimeTopCollectorLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetAllTimeTopCollectorLeaderboardResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetWeeklyStarHunterLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunterLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterLeaderboardResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetWeeklyStarHunter(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/GetWeeklyStarHunter',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.GetWeeklyStarHunterRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.StarHunter.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RenderWeeklyStarHunterLeaderboard(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.leaderboard.LeaderboardService/RenderWeeklyStarHunterLeaderboard',
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.RenderWeeklyStarHunterLeaderboardRequest.SerializeToString,
            ethereum_dot_v1_dot_leaderboard_dot_leaderboard__pb2.ImageResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
