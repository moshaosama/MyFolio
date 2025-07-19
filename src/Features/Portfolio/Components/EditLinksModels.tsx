import EditLinkModel from "../../../Components/EditLinkModel";
import { useOpenEditTagsContext } from "../Context/EditTagsModelContext";
import useEditLinks from "../Hooks/useEditLinks";

const EditLinksModels = () => {
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
          DefaultValue=""
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
          DefaultValue=""
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
          DefaultValue=""
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
          DefaultValue=""
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
          DefaultValue=""
          onSubmit={handleSubmit(handleEditLinks)}
          register={register}
          registerName="MediumLink"
        />
      )}
    </>
  );
};

export default EditLinksModels;
