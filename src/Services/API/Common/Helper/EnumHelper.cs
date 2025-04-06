using System.Reflection;
using System.Runtime.Serialization;

namespace API.Common.Helper
{
  public static class EnumHelper
  {
    public static string GetEnumStringValue<T>(T enumVal) where T : Enum
    {
      return enumVal
          .GetType()
          .GetMember(enumVal.ToString())[0]
          .GetCustomAttribute<EnumMemberAttribute>()?
          .Value ?? enumVal.ToString();
    }
  }
}
