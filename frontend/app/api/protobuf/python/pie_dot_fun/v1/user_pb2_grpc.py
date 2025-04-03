# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from pie_dot_fun.v1 import user_pb2 as pie__dot__fun_dot_v1_dot_user__pb2


class UserServiceStub(object):
    """UserService contains the function to interact with the User of the spacebar
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetUser = channel.unary_unary(
                '/piedotfun.v1.UserService/GetUser',
                request_serializer=pie__dot__fun_dot_v1_dot_user__pb2.GetUserRequest.SerializeToString,
                response_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.User.FromString,
                )
        self.ListUsers = channel.unary_unary(
                '/piedotfun.v1.UserService/ListUsers',
                request_serializer=pie__dot__fun_dot_v1_dot_user__pb2.ListUsersRequest.SerializeToString,
                response_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.ListUsersResponse.FromString,
                )
        self.UpdateUser = channel.unary_unary(
                '/piedotfun.v1.UserService/UpdateUser',
                request_serializer=pie__dot__fun_dot_v1_dot_user__pb2.UpdateUserRequest.SerializeToString,
                response_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.User.FromString,
                )
        self.ValidateNicknameAvailability = channel.unary_unary(
                '/piedotfun.v1.UserService/ValidateNicknameAvailability',
                request_serializer=pie__dot__fun_dot_v1_dot_user__pb2.ValidateNicknameAvailabilityRequest.SerializeToString,
                response_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.ValidateNicknameAvailabilityResponse.FromString,
                )


class UserServiceServicer(object):
    """UserService contains the function to interact with the User of the spacebar
    """

    def GetUser(self, request, context):
        """GetUser will return User.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListUsers(self, request, context):
        """ListUsers
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateUser(self, request, context):
        """UpdateUser update User.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ValidateNicknameAvailability(self, request, context):
        """ValidateNicknameAvailability identify User.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UserServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetUser': grpc.unary_unary_rpc_method_handler(
                    servicer.GetUser,
                    request_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.GetUserRequest.FromString,
                    response_serializer=pie__dot__fun_dot_v1_dot_user__pb2.User.SerializeToString,
            ),
            'ListUsers': grpc.unary_unary_rpc_method_handler(
                    servicer.ListUsers,
                    request_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.ListUsersRequest.FromString,
                    response_serializer=pie__dot__fun_dot_v1_dot_user__pb2.ListUsersResponse.SerializeToString,
            ),
            'UpdateUser': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateUser,
                    request_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.UpdateUserRequest.FromString,
                    response_serializer=pie__dot__fun_dot_v1_dot_user__pb2.User.SerializeToString,
            ),
            'ValidateNicknameAvailability': grpc.unary_unary_rpc_method_handler(
                    servicer.ValidateNicknameAvailability,
                    request_deserializer=pie__dot__fun_dot_v1_dot_user__pb2.ValidateNicknameAvailabilityRequest.FromString,
                    response_serializer=pie__dot__fun_dot_v1_dot_user__pb2.ValidateNicknameAvailabilityResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'piedotfun.v1.UserService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class UserService(object):
    """UserService contains the function to interact with the User of the spacebar
    """

    @staticmethod
    def GetUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/piedotfun.v1.UserService/GetUser',
            pie__dot__fun_dot_v1_dot_user__pb2.GetUserRequest.SerializeToString,
            pie__dot__fun_dot_v1_dot_user__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListUsers(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/piedotfun.v1.UserService/ListUsers',
            pie__dot__fun_dot_v1_dot_user__pb2.ListUsersRequest.SerializeToString,
            pie__dot__fun_dot_v1_dot_user__pb2.ListUsersResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/piedotfun.v1.UserService/UpdateUser',
            pie__dot__fun_dot_v1_dot_user__pb2.UpdateUserRequest.SerializeToString,
            pie__dot__fun_dot_v1_dot_user__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ValidateNicknameAvailability(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/piedotfun.v1.UserService/ValidateNicknameAvailability',
            pie__dot__fun_dot_v1_dot_user__pb2.ValidateNicknameAvailabilityRequest.SerializeToString,
            pie__dot__fun_dot_v1_dot_user__pb2.ValidateNicknameAvailabilityResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
