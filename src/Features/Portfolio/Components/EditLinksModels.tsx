import EditLinkModel from "../../../Components/EditLinkModel";
import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";
import useEditLinks from "../Hooks/useEditLinks";
import useGetUser from "../Hooks/useGetUser";

const EditLinksModels = () => {
  const { User } = useGetUser();
  const {
    isOpenEditResume,
    TriggerOpenEditResume,
    isOpenEditGithub,
    TriggerOpenEditGithub,
    TriggerOpenEditLinkedin,
    TriggerOpenEditMedium,
    TriggerOpenEditTwitter,
    isOpenEditLinkedin,
    isOpenEditMedium,
    isOpenEditTwitter,
  } = useOpenEditTagsContext();
  const { handleEditLinks, handleSubmit, register } = useEditLinks();
  return (
    <>
      {isOpenEditResume && (
        <EditLinkModel
          onCLick={TriggerOpenEditResume}
          Title="Edit Resume Button"
          Label="Resume URL"
          DefaultValue={User?.ResumeLink}
          onSubmit={handleSubmit(handleEditLinks)}
          registerName="ResumeLink"
          register={register}
        />
      )}

      {isOpenEditGithub && (
        <EditLinkModel
          onCLick={TriggerOpenEditGithub}
          Title="Edit Link"
          Label="URL"
          DefaultValue={User?.GithubLink}
          onSubmit={handleSubmit(handleEditLinks)}
          registerName="GithubLink"
          register={register}
        />
      )}

      {isOpenEditLinkedin && (
        <EditLinkModel
          onCLick={TriggerOpenEditLinkedin}
          Title="Edit Link"
          Label="URL"
          DefaultValue={User?.LinkedinLink}
          onSubmit={handleSubmit(handleEditLinks)}
          register={register}
          registerName="LinkedinLink"
        />
      )}

      {isOpenEditTwitter && (
        <EditLinkModel
          onCLick={TriggerOpenEditTwitter}
          Title="Edit Link"
          Label="URL"
          DefaultValue={User?.TwitterLink}
          onSubmit={handleSubmit(handleEditLinks)}
          register={register}
          registerName="TwitterLink"
        />
      )}

      {isOpenEditMedium && (
        <EditLinkModel
          onCLick={TriggerOpenEditMedium}
          Title="Edit Link"
          Label="URL"
          DefaultValue={User?.MediumLink}
          onSubmit={handleSubmit(handleEditLinks)}
          register={register}
          registerName="MediumLink"
        />
      )}
    </>
  );
};

export default EditLinksModels;
