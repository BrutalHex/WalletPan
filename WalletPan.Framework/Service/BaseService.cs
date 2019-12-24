using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WalletPan.Framework.Dto;

namespace WalletPan.Framework.Service
{
    public class BaseService
    {
        protected virtual ValiditionMessage ValidateModel<T>(T modelToValidate)
        {
            if (modelToValidate == null)
                return new ValiditionMessage { Success = false, Message = { Zagrostours.Resources.Messages.EmptyInformationRecieved } };

            var context = new ValidationContext(modelToValidate, serviceProvider: null, items: null);
            var validationResults = new List<ValidationResult>();
            bool isValid = Validator.TryValidateObject(modelToValidate, context, validationResults, true);
            List<string> errors = new List<string>();
            if (!isValid)
            {
                errors = validationResults.Select(a => a.ErrorMessage).ToList();
            }

            return new ValiditionMessage { Success = isValid, Message = errors };
        }


        protected async Task<ValiditionMessage> SaveChanges<T>(T model, string message = null)
        {
            var result = await unitOfWork.SaveChangesAsync();
            if (result >= 1)
            {
                return new ValiditionMessage { Success = true };
            }
            else
            {
                return new ValiditionMessage
                {
                    Success = false,
                    Message = new List<string> {
                  string.IsNullOrEmpty(message) ?   string.Format(resources.Messages.SuccessEntityInsert,
                    resources.Entity.ResourceManager.GetString(model.GetType().Name)) : message }
                };
            }
        }
    }
}
