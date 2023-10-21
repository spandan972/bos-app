const accountId = props.accountId;

if (!accountId) {
  return "";
}

const following = Social.keys(`${accountId}/graph/follow/*`, "final", {
  return_type: "BlockHeight",
  values_only: true,
});

const followers = Social.keys(`*/graph/follow/${accountId}`, "final", {
  return_type: "BlockHeight",
  values_only: true,
});

const numFollowing = following ? Object.keys(following[accountId].graph.follow || {}).length : null;
const numFollowers = followers ? Object.keys(followers || {}).length : null;

return (
  <div>
    <div className="d-flex flex-row">
      <div className="me-4">
        <a
          href={`#/mob.near/widget/FollowPage?accountId=${accountId}&tab=following`}
          className="text-dark"
        >
          <span className="fw-bolder me-2">Following</span>
          {numFollowing !== null ? <span className="text-muted">{numFollowing}</span> : "?"}
        </a>
      </div>
      <div>
        <a
          href={`#/mob.near/widget/FollowPage?accountId=${accountId}&tab=followers`}
          className="text-dark"
        >
          <span className="fw-bolder me-2">Follower{numFollowers !== 1 && "s"}</span>
          {numFollowers !== null ? <span className="text-muted">{numFollowers}</span> : "?"}
        </a>
      </div>
    </div>
  </div>
);
