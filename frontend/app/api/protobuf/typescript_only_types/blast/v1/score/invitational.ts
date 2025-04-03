// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: blast/v1/score/invitational.proto

/* eslint-disable */

export const protobufPackage = "blast.v1.score";

/** SSIndividualInvitationalEvent */
export interface SSIndividualInvitationalEvent {
  /**
   * The resource name of SSIndividualInvitationalEvent.
   * Format: invitationals/SSIndividual/events/{event}
   */
  name: string;
  /**
   * target year month.
   * This invitational event is held monthly.
   * iso 8601 format. ex) 2024-02
   */
  yearMonth: string;
  /** The invitational event start date. */
  startDate:
    | string
    | undefined;
  /** The invitational event end date. */
  endDate:
    | string
    | undefined;
  /** The user should write username in discord. */
  formLink: string;
}

/**
 * SSIndividualInvitational
 *
 * @deprecated
 */
export interface SSIndividualInvitational {
  /**
   * The resource name of SSIndividualInvitational.
   * Format: invitationals/SSIndividuals/{invitational}
   */
  name: string;
  /**
   * target year month.
   * This invitational is held monthly.
   * iso 8601 format. ex) 2024-02
   */
  yearMonth: string;
  /** The invitational start date. */
  startDate:
    | string
    | undefined;
  /** The invitational end date. */
  endDate:
    | string
    | undefined;
  /** The user should write username in discord. */
  formLink: string;
}

/** ListSSIndividualInvitationalEventsRequest */
export interface ListSSIndividualInvitationalEventsRequest {
  /** page size */
  pageSize: number;
}

/** ListSSIndividualInvitationalEventsResponse */
export interface ListSSIndividualInvitationalEventsResponse {
  /** The list of SSIndividualInvitationalEvents. */
  invitationalEvents: SSIndividualInvitationalEvent[];
}

/** CreateSSIndividualInvitationalEventRequest */
export interface CreateSSIndividualInvitationalEventRequest {
  /** The SSIndividualInvitationalEvent to create. */
  invitationalEvent: SSIndividualInvitationalEvent | undefined;
}

/**
 * GetSSIndividualInvitationalLetterRequest
 *
 * @deprecated
 */
export interface GetSSIndividualInvitationalLetterRequest {
}

/**
 * SSIndividualInvitationalLetter
 *
 * @deprecated
 */
export interface SSIndividualInvitationalLetter {
  /** invitational */
  invitational: SSIndividualInvitational | undefined;
}

/** InviteSSIndividualInvitationalEventRequest */
export interface InviteSSIndividualInvitationalEventRequest {
  /**
   * The resource name of SSIndividualInvitationalEvent.
   * Format: invitationals/SSIndividual/events/{event}
   */
  invitationalEvent: string;
  /**
   * The list of invitees.
   * Format: users/{user}
   */
  invitees: string[];
  /** letter viewable start time */
  viewableStartTime:
    | string
    | undefined;
  /** letter viewable end time */
  viewableEndTime: string | undefined;
}

/** InviteSSIndividualInvitationalEventResponse */
export interface InviteSSIndividualInvitationalEventResponse {
  /**
   * The resource name of SSIndividualInvitationalEvent.
   * Format: invitationals/SSIndividual/events/{event}
   */
  invitationalEvent: string;
  /**
   * The list of invitees.
   * Format: users/{user}
   */
  invitees: string[];
  /** letter viewable start time */
  viewableStartTime:
    | string
    | undefined;
  /** letter viewable end time */
  viewableEndTime: string | undefined;
}

/** InvitationalService */
export interface InvitationalService {
  /**
   * ListSSIndividualInvitationals
   * admin
   */
  ListSSIndividualInvitationalEvents(
    request: ListSSIndividualInvitationalEventsRequest,
  ): Promise<ListSSIndividualInvitationalEventsResponse>;
  /**
   * CreateSSIndividualInvitationalEvent
   * admin
   */
  CreateSSIndividualInvitationalEvent(
    request: CreateSSIndividualInvitationalEventRequest,
  ): Promise<SSIndividualInvitationalEvent>;
  /**
   * GetSSIndividualInvitationalLetter
   * Get Active Invitational Letter
   * deprecated: use ListInvitationLetters
   *
   * @deprecated
   */
  GetSSIndividualInvitationalLetter(
    request: GetSSIndividualInvitationalLetterRequest,
  ): Promise<SSIndividualInvitationalLetter>;
  /**
   * InviteSSIndividualInvitationalEvent
   * Send invitations based on past results.
   * for admin, not public api.
   */
  InviteSSIndividualInvitationalEvent(
    request: InviteSSIndividualInvitationalEventRequest,
  ): Promise<InviteSSIndividualInvitationalEventResponse>;
}
