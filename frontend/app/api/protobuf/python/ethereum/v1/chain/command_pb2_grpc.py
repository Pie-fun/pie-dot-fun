# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from ethereum.v1.chain import command_pb2 as ethereum_dot_v1_dot_chain_dot_command__pb2


class ChainCommandServiceStub(object):
    """ChainCommandService is the service that handles all chain requests.
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.MintProtoShipUniverse1 = channel.unary_unary(
                '/ethereum.v1.chain.ChainCommandService/MintProtoShipUniverse1',
                request_serializer=ethereum_dot_v1_dot_chain_dot_command__pb2.MintProtoShipUniverse1Request.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_chain_dot_command__pb2.MintProtoShipUniverse1Response.FromString,
                )
        self.BurnProtoShipUniverse1 = channel.unary_unary(
                '/ethereum.v1.chain.ChainCommandService/BurnProtoShipUniverse1',
                request_serializer=ethereum_dot_v1_dot_chain_dot_command__pb2.BurnProtoShipUniverse1Request.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_chain_dot_command__pb2.Transaction.FromString,
                )
        self.UpgradeToOwnerShipUniverse1 = channel.unary_unary(
                '/ethereum.v1.chain.ChainCommandService/UpgradeToOwnerShipUniverse1',
                request_serializer=ethereum_dot_v1_dot_chain_dot_command__pb2.UpgradeToOwnerShipUniverse1Request.SerializeToString,
                response_deserializer=ethereum_dot_v1_dot_chain_dot_command__pb2.Transaction.FromString,
                )


class ChainCommandServiceServicer(object):
    """ChainCommandService is the service that handles all chain requests.
    """

    def MintProtoShipUniverse1(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def BurnProtoShipUniverse1(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpgradeToOwnerShipUniverse1(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ChainCommandServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'MintProtoShipUniverse1': grpc.unary_unary_rpc_method_handler(
                    servicer.MintProtoShipUniverse1,
                    request_deserializer=ethereum_dot_v1_dot_chain_dot_command__pb2.MintProtoShipUniverse1Request.FromString,
                    response_serializer=ethereum_dot_v1_dot_chain_dot_command__pb2.MintProtoShipUniverse1Response.SerializeToString,
            ),
            'BurnProtoShipUniverse1': grpc.unary_unary_rpc_method_handler(
                    servicer.BurnProtoShipUniverse1,
                    request_deserializer=ethereum_dot_v1_dot_chain_dot_command__pb2.BurnProtoShipUniverse1Request.FromString,
                    response_serializer=ethereum_dot_v1_dot_chain_dot_command__pb2.Transaction.SerializeToString,
            ),
            'UpgradeToOwnerShipUniverse1': grpc.unary_unary_rpc_method_handler(
                    servicer.UpgradeToOwnerShipUniverse1,
                    request_deserializer=ethereum_dot_v1_dot_chain_dot_command__pb2.UpgradeToOwnerShipUniverse1Request.FromString,
                    response_serializer=ethereum_dot_v1_dot_chain_dot_command__pb2.Transaction.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ethereum.v1.chain.ChainCommandService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ChainCommandService(object):
    """ChainCommandService is the service that handles all chain requests.
    """

    @staticmethod
    def MintProtoShipUniverse1(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.chain.ChainCommandService/MintProtoShipUniverse1',
            ethereum_dot_v1_dot_chain_dot_command__pb2.MintProtoShipUniverse1Request.SerializeToString,
            ethereum_dot_v1_dot_chain_dot_command__pb2.MintProtoShipUniverse1Response.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def BurnProtoShipUniverse1(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.chain.ChainCommandService/BurnProtoShipUniverse1',
            ethereum_dot_v1_dot_chain_dot_command__pb2.BurnProtoShipUniverse1Request.SerializeToString,
            ethereum_dot_v1_dot_chain_dot_command__pb2.Transaction.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpgradeToOwnerShipUniverse1(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ethereum.v1.chain.ChainCommandService/UpgradeToOwnerShipUniverse1',
            ethereum_dot_v1_dot_chain_dot_command__pb2.UpgradeToOwnerShipUniverse1Request.SerializeToString,
            ethereum_dot_v1_dot_chain_dot_command__pb2.Transaction.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
